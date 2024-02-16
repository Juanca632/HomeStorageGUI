import influxdb_client
import os
from influxdb_client import InfluxDBClient
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# Define los detalles de conexión
# token = "telegraf_token"
token = "2VJCIWOABisuriGFwMUBQ2GBads2mBldIUQaTAlAoXZy0cp7U_ndx0muoPWGAPXJmOm_o745spoWIvHB1dJT1g=="
org = "Olenergies"
url = "http://192.168.1.251:8086"

# Conecta al cliente de InfluxDB
client = influxdb_client.InfluxDBClient(url=url, token=token, org=org)

data_list = []


#---------------------------------------SOC-------------------------------------------------

# Realiza la consulta
query = """from(bucket: "Real_Time")
|> range(start: -5h)
|> filter(fn: (r) => r["_measurement"] == "Olatrium")
|> filter(fn: (r) => r["Charger/Discharger"] == "MultiPlus-II 48/5000/70-48")
|> filter(fn: (r) => r["source"] == "Batteries")
|> filter(fn: (r) => r["client"] == "Olenergies")
|> filter(fn: (r) => r["location"] == "Montreuil")
|> filter(fn: (r) => r["_field"] =="soc")
|> aggregateWindow(every: 1m, fn: mean)"""
tables = client.query_api().query(query, org=org)

# Almacena los datos en listas separadas
timestamps = []
power_values = []

for table in tables:
    for record in table.records:
        if record['_value'] is not None:  # Verifica si el valor no es None
            power_value = round(record['_value'])
            power_values.append(power_value)

            # Convierte el timestamp a una cadena de texto en formato de hora
            timestamp = record['_time']
            timestamp += timedelta(hours=1)
            timestamp_str = timestamp.strftime('%H:%M')
            timestamps.append(timestamp_str)

soc = power_values

soc = soc[-1]

#---------------------------------------CHART 1.1-------------------------------------------------

# Realiza la consulta
query = """from(bucket: "Real_Time")
|> range(start: -5h)
|> filter(fn: (r) => r["_measurement"] == "Olatrium")
|> filter(fn: (r) => r["Charger/Discharger"] == "MultiPlus-II 48/5000/70-48")
|> filter(fn: (r) => r["source"] == "Loads")
|> filter(fn: (r) => r["client"] == "Olenergies")
|> filter(fn: (r) => r["location"] == "Montreuil")
|> filter(fn: (r) => r["_field"] =="powerT")
|> aggregateWindow(every: 1m, fn: mean)"""
tables = client.query_api().query(query, org=org)

# Almacena los datos en listas separadas
timestamps = []
power_values = []

for table in tables:
    for record in table.records:
        if record['_value'] is not None:  # Verifica si el valor no es None
            power_value = round(record['_value'])
            power_values.append(power_value)

            # Convierte el timestamp a una cadena de texto en formato de hora
            timestamp = record['_time']
            timestamp += timedelta(hours=1)
            timestamp_str = timestamp.strftime('%H:%M')
            timestamps.append(timestamp_str)

power_values1 = power_values

#---------------------------------------CHART 1.2-------------------------------------------------

# Realiza la consulta
query = """from(bucket: "Real_Time")
|> range(start: -5h)
|> filter(fn: (r) => r["_measurement"] == "Olatrium")
|> filter(fn: (r) => r["Charger/Discharger"] == "MultiPlus-II 48/5000/70-48")
|> filter(fn: (r) => r["source"] == "Grid")
|> filter(fn: (r) => r["client"] == "Olenergies")
|> filter(fn: (r) => r["location"] == "Montreuil")
|> filter(fn: (r) => r["_field"] =="powerT")
|> aggregateWindow(every: 1m, fn: mean)"""
tables = client.query_api().query(query, org=org)

# Almacena los datos en listas separadas
timestamps = []
power_values = []

for table in tables:
    for record in table.records:
        if record['_value'] is not None:  # Verifica si el valor no es None
            power_value = round(record['_value'])
            power_values.append(power_value)

            # Convierte el timestamp a una cadena de texto en formato de hora
            timestamp = record['_time']
            timestamp += timedelta(hours=1)
            timestamp_str = timestamp.strftime('%H:%M')
            timestamps.append(timestamp_str)

power_values2 = power_values

#---------------------------------------CHART 1.3-------------------------------------------------

# Realiza la consulta
query = """from(bucket: "Real_Time")
|> range(start: -5h)
|> filter(fn: (r) => r["_measurement"] == "Olatrium")
|> filter(fn: (r) => r["Charger/Discharger"] == "MultiPlus-II 48/5000/70-48")
|> filter(fn: (r) => r["source"] == "Batteries")
|> filter(fn: (r) => r["client"] == "Olenergies")
|> filter(fn: (r) => r["location"] == "Montreuil")
|> filter(fn: (r) => r["_field"] =="power")
|> aggregateWindow(every: 1m, fn: mean)"""
tables = client.query_api().query(query, org=org)

# Almacena los datos en listas separadas
timestamps = []
power_values = []

for table in tables:
    for record in table.records:
        if record['_value'] is not None:  # Verifica si el valor no es None
            power_value = round(record['_value'])
            power_values.append(power_value)

            # Convierte el timestamp a una cadena de texto en formato de hora
            timestamp = record['_time']
            timestamp += timedelta(hours=1)
            timestamp_str = timestamp.strftime('%H:%M')
            timestamps.append(timestamp_str)

power_values3 = power_values
data_list1 = []

for timestamp, power_values3, power_values1, power_values2 in zip(timestamps, power_values3, power_values1, power_values2):
    # Construye el diccionario para el punto de datos actual
    data_point = {
        "hour": timestamp,
        "Loads": power_values1,
        "Grid": power_values2,
        "Batteries": power_values3
    }
    
    # Agrega el diccionario a la lista
    data_list1.append(data_point)

data_list.append(data_list1)

# Ahora data_list contiene todos los datos de cada iteración del bucle


#---------------------------------------CHART 2.1-------------------------------------------------