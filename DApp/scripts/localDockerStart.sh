docker run --rm -v %CD%/mount/iexec_in:/iexec_in -v %CD%/mount/iexec_out:/iexec_out -e IEXEC_IN=/iexec_in -e IEXEC_OUT=/iexec_out desmo-dapp '0x000000000000000000000000000000000000000000000000000000000000000b' '{__!_prefixList__!_:[{__!_abbreviation__!_:__!_desmo__!_,__!_completeURI__!_:__!_https://desmo.vaimee.it/__!_},{__!_abbreviation__!_:__!_qudt__!_,__!_completeURI__!_:__!_http://qudt.org/schema/qudt/__!_},{__!_abbreviation__!_:__!_xsd__!_,__!_completeURI__!_:__!_http://www.w3.org/2001/XMLSchema/__!_},{__!_abbreviation__!_:__!_monas__!_,__!_completeURI__!_:__!_https://pod.dasibreaker.vaimee.it/monas/__!_}],__!_property__!_:{__!_identifier__!_:__!_value__!_,__!_unit__!_:__!_qudt:DEG_C__!_,__!_datatype__!_:1},__!_staticFilter__!_:__!_$[?(@[--#-type--#-]==--#-Sensor--#-)]__!_}'