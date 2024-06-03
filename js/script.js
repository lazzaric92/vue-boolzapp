const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            myProfile: {
                name: 'Sofia',
                avatar: './img/avatar_io',
                visible: true,
                messages: []
            },
            activeContact: 0,
            newMessageContent: '',
            searchBarContent: '',

        }
    },
    methods: {
        changeActiveContact: function(elIndex){
            this.activeContact = elIndex;
        },

        sendMessage: function(messageArray){
            const newSentMessage = {
                date: this.getMessageTime(),
                message: this.newMessageContent,
                status: 'sent'
            }

            messageArray.push(newSentMessage);
            this.clearNewMessageContent();
        },

        clearNewMessageContent: function(){
            this.newMessageContent = '';
        },

        messageTime : function(){
            const newDate = Date();
            const newDateElements = newDate.split(' ');
            const [weekDay, month, day, year, time] = newDateElements;
            const splitTime = time.split(':');
            return `${splitTime[0]}:${splitTime[1]}`;
        },

        getReply: function(messageArray){
            setTimeout(() => {
                const newReceivedMessage = {
                    date: this.messageTime(),
                    message: 'Ok',
                    status: 'received'
                }
                messageArray.push(newReceivedMessage);

            }, 1000)
        },

        newConversation: function(messageArray){
            this.sendMessage(messageArray);
            this.getReply(messageArray);
        },

        getMessagesTime: function(element){
            const dateAndTime = element.date.split(' ');
            const [date, time] = dateAndTime;
            const splitTime = time.split(':');
            return `${splitTime[0]}:${splitTime[1]}`; 
        },

        getLastMessage: function(messageArray){
            const lastMessage = messageArray[messageArray.length - 1];
            return lastMessage.message;
        },

        getLastMessageDate: function(messageArray){
            const lastMessage = messageArray[messageArray.length - 1];
            return lastMessage.date;
        },

        visibleContacts: function(){
            this.contacts.forEach(contact => {
                const searchBarContent = this.searchBarContent.toLowerCase().trim();
                const name = contact.name.toLowerCase().trim();
                if(this.searchBarContent === '' || name.includes(searchBarContent)){
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        }
    },
    updated() {
        this.visibleContacts();
    }
}).mount('#app');



// || MEMO
