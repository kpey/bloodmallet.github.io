Highcharts.chart('warrior_fury_beastlord', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                0,
                0,
                0,
                196629,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                18644,
                22052,
                15174,
                0,
                14884,
                7643,
                13252,
                8805,
                7374,
                13348,
                8954,
                6943,
                5003,
                10259,
                4416,
                8262,
                12230,
                10959,
                3336,
                12726,
                3005,
                13127,
                7775,
                5216,
                4921,
                3064,
                11363,
                875,
                5754,
                4791,
                7050,
                10014,
                10163,
                7658,
                6677,
                5130,
                4750,
                2307,
                14264,
                0,
                0,
                2255,
                2987
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                18065,
                13569,
                15544,
                0,
                11642,
                3880,
                12307,
                3317,
                13632,
                13937,
                10322,
                11966,
                9526,
                3139,
                4776,
                7019,
                4107,
                3128,
                10041,
                3078,
                8030,
                4207,
                4837,
                8654,
                4007,
                9291,
                3036,
                5338,
                9410,
                5127,
                5819,
                4497,
                12549,
                6557,
                6103,
                7438,
                7018,
                7210,
                13275,
                0,
                0,
                5056,
                3719
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                15854,
                14363,
                16141,
                0,
                12407,
                2129,
                13474,
                8118,
                7938,
                5091,
                7306,
                7328,
                5791,
                7884,
                11544,
                9434,
                9083,
                6955,
                7315,
                6772,
                10248,
                5967,
                6973,
                6854,
                3940,
                9077,
                9698,
                10825,
                4995,
                8500,
                7093,
                7378,
                1790,
                5879,
                4623,
                4734,
                4096,
                2177,
                9942,
                0,
                0,
                1589,
                2583
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                14979,
                11962,
                9570,
                0,
                8934,
                9634,
                14651,
                9542,
                7519,
                13057,
                9373,
                4790,
                4924,
                6251,
                7152,
                1471,
                7116,
                8841,
                6825,
                8487,
                4034,
                6361,
                6182,
                4216,
                10384,
                5245,
                7465,
                5478,
                5248,
                5125,
                3036,
                5988,
                6380,
                10257,
                6918,
                98,
                7238,
                6220,
                7901,
                0,
                0,
                7713,
                3712
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                14364,
                14982,
                11994,
                0,
                11885,
                1711,
                5152,
                4608,
                10644,
                89356,
                0,
                3458,
                7330,
                11331,
                6395,
                10279,
                2894,
                5873,
                6405,
                473,
                4924,
                4259,
                6441,
                9526,
                0,
                6299,
                7306,
                4219,
                4340,
                9715,
                8963,
                5853,
                7996,
                2089,
                760,
                6845,
                3416,
                3117,
                8164,
                635,
                7152,
                0,
                5106
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                12564,
                137565,
                10274,
                0,
                11678,
                6651,
                12796,
                2467,
                3943,
                0,
                6137,
                87222,
                5108,
                8027,
                5590,
                5219,
                9123,
                6538,
                2597,
                6184,
                3700,
                76940,
                6520,
                2992,
                4628,
                4093,
                5835,
                2671,
                7299,
                4884,
                65204,
                60651,
                155,
                8094,
                3952,
                5104,
                5282,
                6199,
                12609,
                7945,
                4446,
                2320,
                3655
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                137408,
                0,
                126077,
                0,
                110093,
                147909,
                96556,
                108059,
                87945,
                0,
                82069,
                0,
                83923,
                73833,
                80551,
                77938,
                69976,
                71206,
                76160,
                74266,
                77229,
                0,
                69786,
                68633,
                77176,
                67374,
                58876,
                71431,
                63246,
                60783,
                0,
                0,
                53484,
                51695,
                61848,
                59105,
                56469,
                56853,
                12525,
                69180,
                63995,
                54214,
                49340
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-07 11:25:18"
    },
    title: {
        text: "Warrior - Fury - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Tiny Oozeling in a Jar",
            "Umbral Moonglaives",
            "Toe Knee's Promise",
            "Kil'jaeden's Burning Wish",
            "Terrorbound Nexus",
            "Convergence of Fates",
            "Claw of the Crystalline Scorpid",
            "Unstable Arcano Crystal",
            "Mark of Dargrul",
            "Specter of Betrayal",
            "Ravaged Seed Pod",
            "Cradle of Anguish",
            "Eye of Command",
            "Fel-Oiled Infernal Machine",
            "Chaos Talisman",
            "Windscar Whetstone",
            "Memento of Angerboda",
            "Entwined Elemental Foci",
            "Stat Stick (Haste)",
            "Ettin Fingernail",
            "Chrono Shard",
            "Engine of Eradication",
            "Nightmare Egg Shell",
            "Gift of Radiance",
            "Nature's Call",
            "Stat Stick (Crit)",
            "Ursoc's Rending Paw",
            "Stat Stick (Mastery)",
            "The Devilsaur's Bite",
            "PVP Badge of Victory",
            "Infernal Cinders",
            "Vial of Ceaseless Toxins",
            "Might of Krosus",
            "Bloodstained Handkerchief",
            "PVP Insignia of Victory",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Horn of Valor",
            "Draught of Souls",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "Spiked Counterweight",
            "Giant Ornamental Pearl"
        ]
    },
    yAxis: {
        labels: {
            enabled: true
        },
        min: 0,
        stackLabels: {
            enabled: false,
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});