# MYN
Supervision générale alliant Zabbix/Rsyslog/Sflow

## Backend
Le backend va permettre d'accedez aux données telles que la bdd où sera stocker toutes les informations du réseaux

### Environement
- Debian 11
- MongoDB or MySQL *(a voir)*
- NodeJS or Python *(a voir)*

### Dependancies
- Express

### Configration file


### DB Structure
User:
- UID
- Name
- Mail
- Is AD Account
- Password [?]

Host :
- ID
- Name
- IP
- MAC Address
- VLAN ID
- Info Room ID
- Main Connected Switch ID [?]
- Second Connected Switch ID [?]
- Commentary

VLAN : 
- UID 
- Name
- Mask
- Default Gateway

INFO ROOM:
- ID 
- Name
- Location

## Frontend