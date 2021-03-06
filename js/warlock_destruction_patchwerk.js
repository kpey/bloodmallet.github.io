Highcharts.chart('warlock_destruction_patchwerk', 
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
                134574,
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
                0,
                2622,
                7779,
                5914,
                7212,
                6193,
                7119,
                6371,
                8061,
                6734,
                5213,
                6419,
                7574,
                6582,
                6131,
                6405,
                4991,
                6178,
                5052,
                5252,
                7617,
                5244,
                5290,
                6884,
                7140,
                0,
                7020,
                5699,
                3187,
                5937,
                3781,
                0,
                4764,
                3433,
                3550,
                3175,
                2737,
                4067,
                2848,
                3213,
                1783,
                2944,
                2371,
                1835,
                2020
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                5541,
                6142,
                7268,
                5159,
                7500,
                5905,
                6731,
                6798,
                6241,
                6870,
                5235,
                5383,
                6745,
                4956,
                5641,
                6314,
                4337,
                6068,
                4182,
                5619,
                4939,
                4403,
                5975,
                5877,
                0,
                4583,
                7114,
                5770,
                2605,
                4402,
                0,
                3585,
                3818,
                3809,
                3586,
                2703,
                2536,
                2846,
                999,
                3285,
                2994,
                3448,
                1034,
                1381
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                4848,
                6869,
                5597,
                6783,
                4899,
                5630,
                5660,
                6373,
                5760,
                6508,
                6122,
                5022,
                6333,
                6970,
                4629,
                4625,
                5646,
                4530,
                4675,
                6290,
                3680,
                2891,
                5212,
                4538,
                0,
                5826,
                3606,
                3141,
                3352,
                3681,
                0,
                3734,
                2711,
                3882,
                2371,
                3725,
                3597,
                3108,
                3763,
                3214,
                2944,
                1542,
                2660,
                1046
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                3106,
                6654,
                6549,
                3703,
                3924,
                4948,
                5380,
                5056,
                5793,
                3417,
                5949,
                6703,
                3894,
                4987,
                5565,
                6220,
                3384,
                4400,
                4936,
                4344,
                5346,
                5170,
                5850,
                5534,
                0,
                3332,
                5873,
                3357,
                4285,
                4090,
                0,
                3676,
                4055,
                3415,
                2857,
                2962,
                2874,
                2680,
                1592,
                863,
                1480,
                2107,
                1025,
                576
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                3226,
                5619,
                3332,
                5489,
                5768,
                5295,
                5476,
                68786,
                4002,
                5575,
                4372,
                3149,
                5555,
                4525,
                4293,
                3604,
                5502,
                2970,
                4727,
                4655,
                2112,
                2349,
                3553,
                3925,
                2631,
                5608,
                3720,
                2836,
                2565,
                1760,
                4356,
                2224,
                3260,
                1633,
                3026,
                1299,
                1961,
                2377,
                2052,
                3294,
                1578,
                1795,
                351,
                1498
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                3754,
                75601,
                3200,
                4463,
                4677,
                5161,
                65476,
                0,
                4328,
                4394,
                4561,
                4487,
                3972,
                5193,
                63811,
                5500,
                2698,
                4843,
                3082,
                4361,
                4318,
                3087,
                3104,
                4671,
                4921,
                3157,
                4490,
                2910,
                3256,
                49852,
                3614,
                2869,
                1893,
                3931,
                3275,
                3302,
                2293,
                2348,
                3674,
                1679,
                2000,
                1261,
                2029,
                1770
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                90845,
                0,
                67864,
                63692,
                63455,
                61944,
                0,
                0,
                61683,
                61777,
                61095,
                60582,
                59721,
                59321,
                0,
                57648,
                54784,
                52662,
                52517,
                43643,
                50142,
                50152,
                42488,
                41043,
                64382,
                41702,
                40404,
                49097,
                46336,
                0,
                58651,
                43986,
                44702,
                42517,
                42141,
                41157,
                39760,
                40373,
                37409,
                38356,
                37698,
                35506,
                34540,
                25933
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-07 07:46:35"
    },
    title: {
        text: "Warlock - Destruction - Patchwerk"
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
            "Kil'jaeden's Burning Wish",
            "Unstable Arcano Crystal",
            "Tarnished Sentinel Medallion",
            "Whispers in the Dark",
            "Stat Stick (Mastery)",
            "Stormsinger Fulmination Charge",
            "Dreadstone of Endless Shadows",
            "Charm of the Rising Tide",
            "Tome of Unraveling Sanity",
            "Stat Stick (Crit)",
            "Padawsen's Unlucky Charm",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Infernal Writ",
            "PVP Badge of Dominance",
            "Terror From Below",
            "Chrono Shard",
            "Horn of Valor",
            "PVP Insignia of Dominance",
            "Obelisk of the Void",
            "Star Gate",
            "Moonlit Prism",
            "Naraxas' Spiked Tongue",
            "Deteriorated Construct Core",
            "Portable Manacracker",
            "Darkmoon Deck: Hellfire",
            "Twisting Wind",
            "Bough of Corruption",
            "Fury of the Burning Sky",
            "Devilsaur Shock-Baton",
            "Spectral Thurible",
            "Infernal Alchemist Stone",
            "Oakheart's Gnarled Root",
            "Icon of Rot",
            "Swarming Plaguehive",
            "Aran's Relaxing Ruby",
            "Mrrgria's Favor",
            "Pharameres Forbidden Grimoire",
            "Wriggling Sinew",
            "Caged Horror",
            "Corrupted Starlight",
            "Eye of Skovald",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
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