import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Levekårsindikatorer',
  value: 'levekaar',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Levekår',
      about: {
        info: 'Se detaljert forklaring av levekårsindikatorene i de respektive boksene under.',
        sources: [source.ssb],
      },
      production: true,
      tabs: [
        {
          production: true,
          active: true,
          help: 'Verdier under 100% betyr en lavere forekomst enn i Oslo, mens over 100% betyr en større forekomst.',
          label: 'Sammenlignet med Oslo',
          template: 'livingConditions',
          heading: 'Ulike levekårsindikatorer (%) sammenlignet med Oslo',
          method: 'ratio',
          mode: 'osloRatio',
          id: 'total_levekar_status_oslo',
          url: `${API}/levekar-totalt-status`,
        },
        {
          production: true,
          active: true,
          label: 'Sammenlignet med bydelen',
          help: 'Verdier under 100% betyr en lavere forekomst enn i bydelen, mens over 100% betyr en større forekomst.',
          template: 'livingConditions',
          heading: 'Ulike levekårsindikatorer (%) sammenlignet med bydelen',
          method: 'ratio',
          mode: 'districtRatio',
          id: 'totalt_levekar_status_bydeler',
          url: `${API}/levekar-totalt-status`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Lav utdanning',
      sources: [source.ssb],
      about: {
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog57&submode=catalog&mode=documentation&top=yes',
        info:
          'Statistikken omfatter personer 30–59 år, per 1.1, med utdanningsnivå per 1.10 året før. År i figur/tabell svarer til året for utdanningsnivået. Lav utdanning omfatter personer med kun grunnskole, ingen eller uoppgitt utdanning. Fra og med 1.10.2014 har SSB gjort endringer i beregningsmetode over utdanningsnivå for innvandrere som står med uoppgitt i registeret. SSB bruker imputerte verdier på disse dataene. Dette har ført til brudd i tidsserien; utdanningsnivå fra og med 2015 er ikke direkte sammenlignbart med tidligere år.',
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/levekar-lav-utdanning-status`,
        heading: 'Personer 30–59 år med lav utdanning',
        reverse: true,
        method: 'ratio',
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_lav-utdanning_andel',
          heading: 'Personer 30–59 år med lav utdanning',
          template: 'bars',
          method: 'ratio',
          url: `${API}/levekar-lav-utdanning-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_lav-utdanning_antall',
          heading: 'Personer 30–59 år med lav utdanning',
          template: 'bars',
          method: 'value',
          url: `${API}/levekar-lav-utdanning-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_lav-utdanning_historisk_andel',
          heading: 'Personer 30–59 år med lav utdanning',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2014 og 2015.',
          method: 'ratio',
          template: 'lines',
          url: `${API}/levekar-lav-utdanning-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_lav-utdanning_historisk_antall',
          heading: 'Personer 30–59 år med lav utdanning',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2014 og 2015.',
          method: 'value',
          template: 'lines',
          url: `${API}/levekar-lav-utdanning-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Lavinntekt',
      about: {
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?Geografisubset=301%2C30101+-+30118&headers=r&virtualsubset=AndeletterEUskala_value&v=2&stubs=Geografi&measure=common&Husholdningstypesubset=1&virtualslice=AndeletterEUskala_value&rsubset=2014+-+2017&layers=Husholdningstype&layers=virtual&measuretype=4&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2Fhusholdningerfattig-korrformue&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2Fhusholdningerfattig-korrformue_C1&Husholdningstypeslice=1&mode=cube&top=yes',
        info:
          'Statistikken viser husholdninger med barn under 18 år med lav inntekt, i henhold til EU-skala. Det vil si, husholdningens inntekt etter skatt per forbruksenhet er under 60 prosent av medianinntekten for Oslo. I henhold til EU-skalaen er husholdningsinntekten skalert med forbruksvekter ved å gi første voksne i husholdningen vekten 1, andre voksne vekten 0,5 hver, mens hvert barn får vekten 0,3. Inntekten er videre korrigert for formue, det vil si at husholdninger som har brutto finanskapital per forbruksenhet over 1G, uansett ikke regnes som lavinntektshusholdninger.',
        sources: [source.ssb],
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Barnehusholdninger med lav inntekt korrigert for formue',
        reverse: true,
        method: 'ratio',
        url: `${API}/fattige-barnehusholdninger-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_fattige_andel',
          heading: 'Barnehusholdninger med lav inntekt korrigert for formue',
          template: 'bars',
          method: 'ratio',
          url: `${API}/fattige-barnehusholdninger-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_fattige_antall',
          heading: 'Barnehusholdninger med lav inntekt korrigert for formue',
          template: 'bars',
          method: 'value',
          url: `${API}/fattige-barnehusholdninger-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_fattige_historisk_andel',
          heading: 'Barnehusholdninger med lav inntekt korrigert for formue',
          method: 'ratio',
          template: 'lines',
          url: `${API}/fattige-barnehusholdninger-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_fattige_historisk_antall',
          heading: 'Barnehusholdninger med lav inntekt korrigert for formue',
          method: 'value',
          template: 'lines',
          url: `${API}/fattige-barnehusholdninger-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Ikke fullført videregående skole',
      about: {
        info:
          'Statistikken omfatter bosatte personer 21–29 år, per 1.1, som har startet i videregående utdanning uten å fullføre i løpet av 5 år. Fullføring er oppdatert per 1.oktober året før. Årstallet i overskriften relateres til året for fullføring.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?Geografisubset=301%2C30101+-+30119&headers=r&virtualsubset=Andel_value&v=2&stubs=Geografi&measure=common&V5subset=1&virtualslice=Andel_value&V5slice=1&rsubset=2012+-+2018&layers=V5&layers=virtual&measuretype=4&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2Flevekaarvgs&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2Flevekaarvgs_C1&mode=cube&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/ikke-fullfort-vgs-status`,
        heading: 'Personer 21–29 uten fullført VGS',
        method: 'ratio',
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_vgs_andel',
          heading: 'Personer 21–29 år som ikke har fullført videregående skole',
          template: 'bars',
          method: 'ratio',
          url: `${API}/ikke-fullfort-vgs-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_vgs_antall',
          heading: 'Personer 21–29 år som ikke har fullført videregående skole',
          template: 'bars',
          method: 'value',
          url: `${API}/ikke-fullfort-vgs-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_vgs-historisk_andel',
          heading: 'Personer 21–29 år som ikke har fullført videregående skole',
          template: 'lines',
          method: 'ratio',
          url: `${API}/ikke-fullfort-vgs-historisk`,
          production: true,
        },

        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_vgs-historisk_antall',
          heading: 'Personer 21–29 år som ikke har fullført videregående skole',
          template: 'lines',
          method: 'value',
          url: `${API}/ikke-fullfort-vgs-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Dødelighet',
      about: {
        info:
          'For hver 5 års gruppe og kjønn for alderen 55–79 år beregnes det en dødsrate, dvs. antall døde per 1000 personer. Det lages deretter et gjennomsnitt av disse 10 dødsratene. Deretter igjen lages det et gjennomsnitt for de 7 siste årene for å sikre at tilfeldige årsvariasjoner ikke skal påvirke hovedmønsteret.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=r&stubs=geografi&kjnnslice=3&measure=common&virtualslice=antall_value&layers=alder&layers=kjnn&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FD01-Dode-etter-bydel-kjonn-alder&mode=cube&v=2&virtualsubset=antall_value&alderslice=10&rsubset=2007+-+2018&aldersubset=10&geografisubset=30100%2C30101+-+30198&measuretype=4&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FD01-Dode-etter-bydel-kjonn-alder_C1&kjnnsubset=3&top=yes',
      },
      map: {
        labels: ['Lavere dødsrate', 'Høyere dødsrate'],
        url: `${API}/dodsrater-status`,
        reverse: true,
        heading: 'Dødelighet for personer 55–79 år',
        method: 'ratio',
        showPermille: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Døde per 1000 personer',
          id: 'levekar_dodsrater_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/dodsrater-status`,
          production: true,
          showPermille: true,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'levekar_dodsrater_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/dodsrater-historisk`,
          production: true,
          showPermille: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Ikke sysselsatte',
      about: {
        info:
          'Statistikken omfatter bosatte i Oslo, 30–59 år, som ikke er registrert sysselsatt per 4. kvartal. En sysselsatt er her definert som enten lønnstaker eller selvstendig næringsdrivende. En lønnstaker er en som har utført inntektsgivende arbeid av minst én times varighet i løpet av referanseuken.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog10&submode=catalog&mode=documentation&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/levekar-ikke-sysselsatte-status`,
        heading: 'Ikke-sysselsatte 30–59 år',
        method: 'ratio',
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Antall',
          id: 'levekaar_ikke_sysselsatte_status_antall',
          heading: 'Ikke sysselsatte 30–59 år',
          template: 'bars',
          method: 'value',
          url: `${API}/levekar-ikke-sysselsatte-status`,
          production: true,
        },
        {
          active: false,
          label: 'Andel',
          id: 'levekaar_ikke_sysselsatte_status_andel',
          heading: 'Ikke sysselsatte 30–59 år',
          template: 'bars',
          method: 'ratio',
          url: `${API}/levekar-ikke-sysselsatte-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekaar_ikke_sysselsatte_historisk_antall',
          heading: 'Ikke sysselsatte 30–59 år',
          template: 'lines',
          method: 'value',
          url: `${API}/levekar-ikke-sysselsatte-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekaar_ikke_sysselsatte_historisk_andel',
          heading: 'Ikke sysselsatte 30–59 år',
          template: 'lines',
          method: 'ratio',
          url: `${API}/levekar-ikke-sysselsatte-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Kort botid',
      about: {
        info:
          'Statistikken omfatter personer som har innvandret til Norge fra Asia, Afrika, Latin-Amerika og Øst-Europa for mindre enn fem år siden.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=Ankomst&Geografisubset=30100%2C30101+-+30118&stubs=Geografi&measure=common&virtualslice=Antall_value&layers=r&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FIn03-Innvandrerbefolkningen-etter-bydel-delbydel-ankomstaar-2017&mode=cube&Ankomstsubset=100%2C1+-+99&v=2&virtualsubset=Antall_value&rsubset=2019&measuretype=4&rslice=2019&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FIn03-Innvandrerbefolkningen-etter-bydel-delbydel-ankomstaar-2017_C1&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/levekar-innvandrere-ikke-vestlige-kort-status`,
        heading: 'Ikke-vestlige innvandrere med kort botid',
        method: 'ratio',
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Antall',
          id: 'levekaar_innvandrere_ikke_vestlige_kort_status_antall',
          heading: 'Innvandrere fra Asia, Afrika, Latin-Amerika og Øst-Europa utenfor EU med botid kortere enn fem år',
          template: 'bars',
          method: 'value',
          url: `${API}/levekar-innvandrere-ikke-vestlige-kort-status`,
          production: true,
        },
        {
          active: false,
          label: 'Andel',
          id: 'levekaar_innvandrere_ikke_vestlige_kort_status_andel',
          heading: 'Innvandrere fra Asia, Afrika, Latin-Amerika og Øst-Europa utenfor EU med botid kortere enn fem år',
          template: 'bars',
          method: 'ratio',
          url: `${API}/levekar-innvandrere-ikke-vestlige-kort-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_innvandrere_ikke_vestlige_kort_historisk_antall',
          heading: 'Innvandrere fra Asia, Afrika, Latin-Amerika og Øst-Europa utenfor EU med botid kortere enn fem år',
          template: 'lines',
          method: 'value',
          url: `${API}/levekar-innvandrere-ikke-vestlige-kort-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_innvandrere_ikke_vestlige_kort_historisk_andel',
          heading: 'Innvandrere fra Asia, Afrika, Latin-Amerika og Øst-Europa utenfor EU med botid kortere enn fem år',
          template: 'lines',
          method: 'ratio',
          url: `${API}/levekar-innvandrere-ikke-vestlige-kort-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Trangboddhet',
      about: {
        info:
          'Statistikken viser trangbodde husholdninger per 1.1. Husholdninger regnes som trangbodd dersom: (1) Antall rom i boligen er mindre enn antall personer eller én person bor på ett rom, og (2) antall kvadratmeter (p-areal) er under 25 kvm per person. I tilfeller hvor det mangler opplysninger om antall rom eller p-areal, vil husholdninger regnes som trangbodde dersom en av de to betingelsene er oppfylt.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?Geografisubset=30100%2C30101+-+30117&headers=virtual&stubs=Geografi&measure=common&layers=r&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FNPS-trangboddhet&mode=cube&v=2&virtualsubset=Trangboddhethusholdninger_value+-+Trangboddhetpersoner_value&rsubset=2015&measuretype=4&rslice=2015&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FNPS-trangboddhet_C1&top=yes',
      },
      production: true,

      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Trangbodde husholdninger',
        url: `${API}/levekar-trangbodde-status`,
        method: 'ratio',
        reverse: true,
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_trangbodde_status_andel',
          heading: 'Trangbodde husholdninger',
          template: 'bars',
          method: 'ratio',
          url: `${API}/levekar-trangbodde-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_trangbodde_status_antall',
          heading: 'Trangbodde husholdninger',
          template: 'bars',
          method: 'value',
          url: `${API}/levekar-trangbodde-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_trangbodde_historisk_andel',
          heading: 'Trangbodde husholdninger',
          method: 'ratio',
          template: 'lines',
          url: `${API}/levekar-trangbodde-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_trangbodde_historisk_antall',
          heading: 'Trangbodde husholdninger',
          method: 'value',
          template: 'lines',
          url: `${API}/levekar-trangbodde-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Redusert funksjonsevne',
      about: {
        info:
          'Statistikken omfatter personer i alderen 16 til 66 år med redusert funksjonsevne per 30. november. F.o.m. 2010 er redusert funksjonsevne definert som mottakere av sykepenger, uførepensjon  eller personer med nedsatt arbeidsevne. Nedsatt arbeidsevne omfatter personer som på grunn av sykdom, skade eller andre hindringer har behov for ekstra oppfølging fra NAV for å få eller beholde arbeid. For perioden 2000–2009 er redusert funksjonsevne definert som personer som er registrert i FD-trygd basen på ett eller flere av disse områdene per 30.11: Uførepensjon, sykepenger, medisinsk rehabilitering, foreløpig uførestønad eller arbeidssøkerstatus=yrkeshemmet.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?Geografisubset=301%2C30101+-+30118&headers=r&Befolkningslice=2&stubs=Geografi&measure=common&virtualslice=Andel_value&layers=Kjnn&layers=Befolkning&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2Flevekaarfunkevne&mode=cube&v=2&virtualsubset=Andel_value&Befolkningsubset=2&rsubset=2000+-+2016&measuretype=4&Kjnnsubset=1&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2Flevekaarfunkevne_C1&Kjnnslice=1&top=yes',
      },
      production: true,
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/levekar-redusert-funksjonsevne-status`,
        heading: 'Personer 16–66 år med redusert funksjonsevne',
        reverse: true,
        method: 'ratio',
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_redusert_funksjonsevne_status_andel',
          heading: 'Personer 16–66 år med redusert funksjonsevne',
          template: 'bars',
          method: 'ratio',
          url: `${API}/levekar-redusert-funksjonsevne-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_redusert_funksjonsevne_status_antall',
          heading: 'Personer 16–66 år med redusert funksjonsevne',
          template: 'bars',
          method: 'value',
          url: `${API}/levekar-redusert-funksjonsevne-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_redusert_funksjonsevne_historisk_andel',
          heading: 'Personer 16–66 år med redusert funksjonsevne',
          method: 'ratio',
          template: 'lines',
          url: `${API}/levekar-redusert-funksjonsevne-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_redusert_funksjonsevne_historisk_antall',
          heading: 'Personer 16–66 år med redusert funksjonsevne',
          method: 'value',
          template: 'lines',
          url: `${API}/levekar-redusert-funksjonsevne-historisk`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Levekår',
    tema: 'Levekårs&shy;indikatorer',
    bgImage: `${baseUrl}/img/levekaar`,
    txtColor: 'rgb(244, 206, 138)',
  },
  related: ['husholdninger', 'innvandrerbefolkningen' /* 'rom-per-person', TODO: temporary */],
};
