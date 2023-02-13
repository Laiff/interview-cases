/*
История:
На проект пришел Junior-разработчик, которого попросили сделать следующее:
 
Создать компонент, который позволял бы отправлять статистику (пинги) нажатия не него.
 
Из функциональных требований можно выделить следующее:
- не должна быть большая нагрузка на бекенд
- должны быть залогированы все события кликов
- кнопок на странице может быть больше одной
 
Необходимо провести код-ревью
*/

import React from "React";
import clickhouse from "clickhouseClient";

const pings_cache = [];

const lastFlushPingsCacheAt = new Date();

const flushPingsCache = () => {
  lastFlushPingsCacheAt = new Date();
  console.log("flushPingsCache started");
  if (pings_cache.length > 0) {
    const pings_stream = clickhouse.insert("INSERT INTO pings").stream();
    for (const i = 0, len = pings_cache.length; i < len; i++) {
      const ping = pings_cache[i];
      await pings_stream.writeRow(ping);
    }
    await pings_stream.exec();
    pings_cache = [];
  }
};

const flushPingsCacheInterval = function () {
  if (new Date() - lastFlushPingsCacheAt > 59000 && pings_cache.length > 0) {
    flushPingsCache();
  }
};

setInterval(flushPingsCacheInterval, 60000);

class PingButton extends React.Component {
  async componentWillUnmount() {
    console.log("Stopping...");
    await flushPingsCache();
    console.log("Stopped.");
  }

  sendPing() {
    console.log("Ping");
    pings_cache.push([this.context.userId, this.props.btnId, Date.now()]);
    if (pings_cache.length > 3) {
      flushPingsCache();
    }
  }

  render() {
    return (
      <div>
        <div className="button" onClick={this.sendPing}></div>
      </div>
    );
  }
}
