addEventListener("load", (event) => {

    const cardSelector = '.wgg_card.offer_list_item'


    const cardTitles = document.querySelectorAll(`${cardSelector} h3`)

    cardTitles.forEach((element) => {

        let keywords = [
            'Studentenverbindung',
            'Sängerschaft',
            'Burschenschaft',
            'Corps',
            'Verbindung',
            'Sänger',
        ];

        if(keywords.some(keyword => element.textContent.includes(keyword))) {
            // hide the card
            element.closest(cardSelector).style.display = 'none';
        }
    });


});





