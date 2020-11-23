var app = new Vue({
  el: "#app",

  data: {
    active: 0,
    rub: [ {  name: "Michele",
              img: "img/avatar_1.jpg",
              chat: [ { text: "Lo sai che ha aperto una nuova pizzeria",
                        time: "15:03",
                        type: "out"
                      },
                      { text: "Si, ma preferirei andare al cinema",
                        time: "15:05",
                        type: "in"
                      },
                      { text: "Ok!",
                        time: "15:10",
                        type: "out"
                      },
                      { text: "Andata per il cinema!",
                        time: "15:10",
                        type: "out"
                      },
                      { text: "A dopo!",
                        time: "15:15",
                        type: "in"
                      }
                    ]
            },
           {  name: "Giovanni",
              img: "img/avatar_2.jpg",
              chat: [ { text: "Ciao come stai?",
                        time: "15:03",
                        type: "out"
                      },
                      { text: "Bene, te?",
                        time: "15:05",
                        type: "in"
                      },
                      { text: "Bene anche io grazie",
                        time: "15:10",
                        type: "out"
                      }
                    ]
              }

    ] //fine rub
  }, //fine data

  methods: {

    activeChat: function(i) {
      this.active = i
    }

  }

})
