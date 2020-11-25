var app = new Vue({
  el: "#app",

  data: {
    inputMsg: "",
    active: 0,
    searchKey: "",
    arrayRandomResp: ["Si", "No", "Forse", "Dipende", "Va bene", "Ok"],
    rub:  [ { name: "Michele",
              img: "img/avatar_1.jpg",
              lastOnline: "23/10/2020 17:21",
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
                        time: "23/10/2020 17:21",
                        type: "in"
                      }
                    ]
            },
            { name: "Giovanni",
              img: "img/avatar_2.jpg",
              lastOnline: "23/10/2020 13:58",
              chat: [ { text: "Ciao come stai?",
                        time: "23/10/2020 13:57",
                        type: "out"
                      },
                      { text: "Bene, te?",
                        time: "23/10/2020 13:58",
                        type: "in"
                      },
                      { text: "Bene anche io grazie",
                        time: "23/10/2020 16:59",
                        type: "out"
                      }
                    ]
            },
            { name: "Lorenzo",
              img: "img/avatar_3.jpg",
              lastOnline: "23/10/2020 15:36",
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
                        time: "23/10/2020 15:36",
                        type: "in"
                      }
                    ]
            },
            { name: "Mattia",
              img: "img/avatar_4.jpg",
              lastOnline: "23/10/2020 14:57",
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
                        time: "23/10/2020 14:57",
                        type: "in"
                      }
                    ]
            },
            { name: "Mario",
              img: "img/avatar_5.jpg",
              lastOnline: "23/10/2020 13:33",
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
    ] // Fine rub
  }, // Fine data

  methods: {

    // Funzione active chat
    activeChat: function(i) {
      this.active = i;
      setTimeout(this.autoScroll, 1);
      this.removeSelect();
    },

    // Funzione push new msg
    pushNewMsg: function() {
      if (this.inputMsg != "") {
        var newMsg = {text: this.inputMsg, time: this.getTime(), type: "out"};
        this.rub[this.active].chat.push(newMsg);
        setTimeout(this.autoScroll, 1)
        setTimeout(this.autoResp, 1000);
        this.moveUpChat();
        this.removeSelect();
        this.active = 0;
        this.inputMsg = "";
      }
    },

    // Funzione cattura data e ora
    getTime: () => new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes(),

    // Funzione risposta automatica
    autoResp: function() {
      var resp = {text: this.arrayRandomResp[Math.floor(Math.random() * 6)], time: this.getTime(), type: "in"};
      this.rub[this.active].chat.push(resp);
      setTimeout(this.autoScroll, 1)
      this.lastOnlineTime()
    },

    // Funzione per spostare chat utilizzata al primo posto
    moveUpChat: function() {
      var chatDaSpostare = this.rub[this.active]
      this.rub.splice(this.active, 1)
      this.rub.unshift(chatDaSpostare)
    },

    // Funzione per scrollare automaticamente in basso chat
    autoScroll: function() {
      var cnt = document.getElementById("mainchat");
      cnt.scrollTop = cnt.scrollHeight;
    },

    // Funzione rimuovere selezione messaggi
    removeSelect: function() {
      this.rub[this.active].chat.forEach((item, i) => {
        Vue.delete(this.rub[this.active].chat[i], "isSelected")
      });
    },

    // Funzione selezione messaggio (per sottomenu)
    selectMsg: function(i) {
      if (this.rub[this.active].chat[i].isSelected === true) {
        Vue.delete(this.rub[this.active].chat[i], "isSelected")
      } else {
        this.removeSelect()
        Vue.set(this.rub[this.active].chat[i], "isSelected", true)
      }
    },

    // Funzione per cancellare messaggio
    deleteMsg: function(i) {
      Vue.delete(this.rub[this.active].chat, i)
    },

    // Funzione per salvare ultimo accesso
    lastOnlineTime: function() {
      this.rub[this.active].lastOnline = this.rub[this.active].chat[this.rub[this.active].chat.length-1].time
    }

  },
})
