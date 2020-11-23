var app = new Vue({
  el: "#app",

  data: {
    active: 0,
    rub: [ {  name: "Michele",
              img: "img/avatar_1.jpg",
              chat: [ { text: "Lo sai che ha aperto una nuova pizzeria",
                        time: "23/10/2020 13:30",
                        type: "out"
                      },
                      { text: "Si, ma preferirei andare al cinema",
                        time: "23/10/2020 13:33",
                        type: "in"
                      },
                      { text: "Ok!",
                        time: "23/10/2020 13:35",
                        type: "out"
                      },
                      { text: "Andata per il cinema!",
                        time: "23/10/2020 13:35",
                        type: "out"
                      },
                      { text: "A dopo!",
                        time: "23/10/2020 13:41",
                        type: "in"
                      }
                    ]
            },
           {  name: "Giovanni",
              img: "img/avatar_2.jpg",
              chat: [ { text: "Ciao come stai?",
                        time: "23/10/2020 13:57",
                        type: "out"
                      },
                      { text: "Bene, te?",
                        time: "23/10/2020 13:58",
                        type: "in"
                      },
                      { text: "Bene anche io grazie",
                        time: "23/10/2020 13:59",
                        type: "out"
                      }
                    ]
            },
            { name: "Lorenzo",
              img: "img/avatar_3.jpg",
              chat: [ { text: "Domani calcetto?",
                        time: "23/10/2020 13:12",
                        type: "out"
                      },
                      { text: "Ok ci sono, a che ora?",
                        time: "23/10/2020 13:30",
                        type: "in"
                      },
                      { text: "10 puntuale",
                        time: "23/10/2020 13:35",
                        type: "out"
                      },
                      { text: "ok a domani!",
                        time: "23/10/2020 13:36",
                        type: "in"
                      }
                    ]
            },
            { name: "Mattia",
              img: "img/avatar_4.jpg",
              chat: [ { text: "Ciao Mattia",
                        time: "23/10/2020 13:55",
                        type: "out"
                      },
                      { text: "ciao! superato il test?",
                        time: "23/10/2020 13:56",
                        type: "in"
                      },
                      { text: "yesssss",
                        time: "23/10/2020 13:57",
                        type: "out"
                      },
                      { text: "te?",
                        time: "23/10/2020 13:57",
                        type: "out"
                      },
                      { text: "anche io!",
                        time: "23/10/2020 13:57",
                        type: "in"
                      }
                    ]
            },
            { name: "Mario",
              img: "img/avatar_5.jpg",
              chat: [ { text: "Domenica giro in moto con Mattia",
                        time: "23/10/2020 13:30",
                        type: "out"
                      },
                      { text: "Vieni?",
                        time: "23/10/2020 13:30",
                        type: "out"
                      },
                      { text: "Volentieri, devo provare le gomme nuove",
                        time: "23/10/2020 13:33",
                        type: "in"
                      }
                    ]
            }
    ] //fine rub
  }, //fine data

  methods: {

    activeChat: function(i) {
      this.active = i
    }

    // prova funzione che userò per catturare data e ora dei nuovi messaggi
    // getTime: function() {
    //   var dataOra = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes()
    //   console.log(dataOra);
    //   this.rub[0].chat[0].time = dataOra
    // }

  }

})
