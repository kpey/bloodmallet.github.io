Highcharts.chart('death_knight_unholy_beastlord', 
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
                298252,
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
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                26378,
                0,
                12576,
                7452,
                15311,
                18747,
                12363,
                14556,
                6757,
                12170,
                16285,
                13851,
                13941,
                11986,
                5678,
                3991,
                14680,
                7065,
                10802,
                10215,
                1465,
                16950,
                12891,
                9671,
                8559,
                8989,
                7707,
                7746,
                15393,
                17780,
                0,
                10520,
                7869,
                0,
                5729,
                3295,
                7424,
                3611,
                4169,
                5390,
                5032,
                8252,
                2983
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                7710,
                0,
                16719,
                1925,
                12322,
                0,
                11045,
                13076,
                20023,
                11228,
                7417,
                12652,
                5938,
                11169,
                16375,
                6665,
                23159,
                704,
                10275,
                17918,
                8941,
                6482,
                9992,
                7608,
                12206,
                8427,
                16090,
                10862,
                12840,
                12289,
                0,
                10562,
                4729,
                0,
                7416,
                6191,
                3149,
                11831,
                5672,
                5060,
                0,
                1332,
                7997
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                22355,
                0,
                11690,
                3545,
                17022,
                73449,
                6095,
                11230,
                5359,
                8698,
                12611,
                15655,
                14409,
                9188,
                15307,
                5615,
                2359,
                7666,
                9945,
                16797,
                0,
                10836,
                5460,
                6911,
                7463,
                11276,
                9042,
                8698,
                5998,
                8821,
                0,
                12444,
                2577,
                0,
                8257,
                6278,
                6560,
                0,
                9727,
                5266,
                8966,
                8811,
                4308
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                9849,
                0,
                13862,
                1801,
                7105,
                17864,
                7547,
                17432,
                13339,
                19247,
                13213,
                5954,
                10041,
                8437,
                5796,
                7887,
                14245,
                5141,
                14321,
                3796,
                4131,
                5879,
                10538,
                8701,
                12763,
                9929,
                9297,
                9091,
                12844,
                1281,
                0,
                7578,
                2691,
                0,
                4053,
                6585,
                6002,
                14132,
                0,
                205,
                3580,
                403,
                2436
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                11010,
                0,
                15630,
                3380,
                12968,
                13190,
                11686,
                3055,
                7663,
                3303,
                8533,
                8840,
                9245,
                17021,
                6179,
                4140,
                128592,
                0,
                11290,
                16914,
                4002,
                17132,
                10381,
                14192,
                9052,
                1613,
                9807,
                6473,
                12360,
                13273,
                12069,
                7065,
                7432,
                6187,
                3850,
                3393,
                7657,
                6034,
                245,
                8799,
                3890,
                7252,
                3800
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                230057,
                0,
                7097,
                9576,
                9781,
                12434,
                6839,
                141752,
                6556,
                9539,
                9458,
                14389,
                10375,
                6800,
                10295,
                5763,
                0,
                9034,
                7161,
                8179,
                10179,
                6270,
                351,
                4991,
                5211,
                8340,
                95786,
                7989,
                1111,
                7281,
                6979,
                5603,
                6030,
                5673,
                8660,
                78520,
                1488,
                69679,
                7445,
                5088,
                5576,
                194,
                2984
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                219025,
                256602,
                208228,
                140292,
                165843,
                0,
                136470,
                131829,
                127655,
                121662,
                126539,
                122540,
                127413,
                150469,
                0,
                153168,
                112992,
                99986,
                143165,
                104652,
                116734,
                110913,
                105408,
                102226,
                0,
                94137,
                81184,
                79296,
                118011,
                81310,
                102314,
                105888,
                77168,
                0,
                71175,
                0,
                72087,
                64109,
                63685,
                59636,
                56563
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-07 08:46:47"
    },
    title: {
        text: "Death_Knight - Unholy - Beastlord"
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
            "Cradle of Anguish",
            "Kil'jaeden's Burning Wish",
            "Chaos Talisman",
            "Unstable Arcano Crystal",
            "Stat Stick (Haste)",
            "Fel-Oiled Infernal Machine",
            "Draught of Souls",
            "Engine of Eradication",
            "Eye of Command",
            "Chrono Shard",
            "Entwined Elemental Foci",
            "Stat Stick (Mastery)",
            "Nightmare Egg Shell",
            "Ettin Fingernail",
            "Memento of Angerboda",
            "Ravaged Seed Pod",
            "Specter of Betrayal",
            "Toe Knee's Promise",
            "Stat Stick (Crit)",
            "Claw of the Crystalline Scorpid",
            "Spiked Counterweight",
            "Horn of Valor",
            "Gift of Radiance",
            "Terrorbound Nexus",
            "PVP Badge of Victory",
            "Convergence of Fates",
            "Vial of Ceaseless Toxins",
            "PVP Insignia of Victory",
            "Bloodstained Handkerchief",
            "Might of Krosus",
            "Darkmoon Deck: Dominion",
            "Ursoc's Rending Paw",
            "Nature's Call",
            "Infernal Alchemist Stone",
            "Tiny Oozeling in a Jar",
            "Umbral Moonglaives",
            "Mark of Dargrul",
            "Infernal Cinders",
            "The Devilsaur's Bite",
            "Spontaneous Appendages",
            "Windscar Whetstone",
            "Giant Ornamental Pearl",
            "Faulty Countermeasure"
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