/**
 * Created by aspetko on 20.11.17.
 */
var beginning = [
    "Marilyn Monroe ",
    "Abraham Lincoln ",
    "Mother Teresa ",
    "John F. Kennedy ",
    "Martin Luther King ",
    "Nelson Mandela ",
    "Winston Churchill ",
    "Bill Gates ",
    "Muhammad Ali ",
    "Mahatma Gandhi ",
    "Margaret Thatcher ",
    "Charles de Gaulle ",
    "Christopher Columbus ",
    "George Orwell ",
    "Charles Darwin ",
    "Elvis Presley ",
    "Albert Einstein ",
    "Paul McCartney ",
    "Plato ",
    "Queen Elizabeth II ",
    "Queen Victoria ",
    "John M Keynes ",
    "Mikhail Gorbachev ",
    "Jawaharlal Nehru ",
    "Leonardo da Vinci ",
    "Louis Pasteur ",
    "Leo Tolstoy ",
    "Pablo Picasso ",
    "Vincent Van Gogh ",
    "Franklin D. Roosevelt ",
    "Pope John Paul II ",
    "Thomas Edison ",
    "Rosa Parks ",
    "Aung San Suu Kyi ",
    "Lyndon Johnson ",
    "Ludwig Beethoven ",
    "Oprah Winfrey ",
    "Indira Gandhi ",
    "Eva Peron ",
    "Benazir Bhutto ",
    "Desmond Tutu ",
    "Dalai Lama ",
    "Walt Disney ",
    "Neil Armstrong ",
    "Donald Trump ",
    "Peter Sellers ",
    "Barack Obama ",
    "Malcolm X ",
    "J.K.Rowling ",
    "Richard Branson ",
    "Pele ",
    "Angelina Jolie ",
    "Jesse Owens ",
    "Ernest Hemingway ",
    "John Lennon ",
    "Henry Ford ",
    "Haile Selassie ",
    "Joseph Stalin ",
    "Lord Baden Powell ",
    "Michael Jordon ",
    "George Bush Jnr ",
    "Vladimir Lenin ",
    "Ingrid Bergman ",
    "Fidel Castro ",
    "Oscar Wilde ",
    "Coco Chanel ",
    "Pope Francis ",
    "Amelia Earhart ",
    "Adolf Hitler ",
    "Sting ",
    "Mary Magdalene ",
    "Alfred Hitchcock ",
    "Michael Jackson ",
    "Madonna ",
    "Mata Hari ",
    "Cleopatra ",
    "Grace Kelly ",
    "Steve Jobs ",
    "Ronald Reagan ",
    "Lionel Messi ",
    "Babe Ruth ",
    "Bob Geldof ",
    "Leon Trotsky ",
    "Roger Federer ",
    "Sigmund Freud ",
    "Woodrow Wilson ",
    "Mao Zedong ",
    "Katherine Hepburn ",
    "Audrey Hepburn ",
    "David Beckham ",
    "Tiger Woods ",
    "Usain Bolt ",
    "Carl Lewis ",
    "Prince Charles ",
    "Jacqueline Kennedy Onassis ",
    "C.S. Lewis ",
    "Billie Holiday ",
    "J.R.R. Tolkien ",
    "Billie Jean King ",
    "Anne Frank "
];
var middle = [
    "noded ",
    "consented ",
    "complyed ",
    "concured ",
    "accepted ",
    "acknowledged ",
    "consented ",
    "requested ",
    "questioned ",
    "inquireed ",
    "poseed ",
    "propositioned ",
    "solicited ",
    "pleaded ",
    "cross-examineed ",
    "demanded ",
    "grilled ",
    "interrogateed ",
    "needleed ",
    "queryed ",
    "approached ",
    "arriveed ",
    "entered ",
    "advanceed ",
    "convergeed ",
    "meeted ",
    "appeared in ",
    "showed up ",
    "attended ",
    "howled ",
    "whimpered ",
    "called ",
    "screamed ",
    "shrieked ",
    "squealed ",
    "roared ",
    "mewled ",
    "hooted ",
    "squalled ",
    "wailed ",
    "hollered ",
    "yelped ",
    "bawled ",
    "screeched ",
    "yammered ",
    "whooped ",
    "invadeed ",
    "boarded ",
    "accessed ",
    "barged in ",
    "bursted into ",
    "trespassed through ",
    "droped in ",
    "wandered ",
    "infiltrateed ",
    "intrudeed ",
    "encroached ",
    "pierceed ",
    "concealed ",
    "obscureed ",
    "covered ",
    "disguiseed ",
    "masked ",
    "hole uped ",
    "squirreled away ",
    "stashed ",
    "smuggleed goods into ",
    "towed ",
    "buryed ",
    "camouflageed ",
    "protected ",
    "screened"
];
var end = [
    "Middle Earth.",
    "Afghanistan.",
    "Albania.",
    "Algeria.",
    "Andorra.",
    "Angola.",
    "Antigua and Barbuda.",
    "Argentina.",
    "Armenia.",
    "Artsakh.",
    "Australia.",
    "Austria.",
    "Azerbaijan.",
    "Bahamas.",
    "Bahrain.",
    "Bangladesh.",
    "Barbados.",
    "Belarus.",
    "Belgium.",
    "Belize.",
    "Benin.",
    "Bhutan.",
    "Bolivia.",
    "Bosnia and Herzegovina.",
    "Botswana.",
    "Brazil.",
    "Brunei.",
    "Bulgaria.",
    "Burkina Faso.",
    "Burma.",
    "Burundi.",
    "Cambodia.",
    "Cameroon.",
    "Canada.",
    "Cape Verde.",
    "Central African Republic.",
    "Chad.",
    "Chile.",
    "China.",
    "Colombia.",
    "Comoros.",
    "Cook Islands.",
    "Costa Rica.",
    "Côte d'Ivoire.",
    "Croatia.",
    "Cuba.",
    "Cyprus.",
    "Czech Republic.",
    "Democratic People's Republic of Korea .",
    "Democratic Republic of the Congo .",
    "Denmark.",
    "Djibouti.",
    "Dominica.",
    "Dominican Republic.",
    "East Timor.",
    "Ecuador.",
    "Egypt.",
    "El Salvador.",
    "Equatorial Guinea.",
    "Eritrea.",
    "Estonia.",
    "Ethiopia.",
    "Fiji.",
    "Finland.",
    "France.",
    "Gabon.",
    "Gambia.",
    "Georgia.",
    "Germany.",
    "Ghana.",
    "Greece.",
    "Grenada.",
    "Guatemala.",
    "Guinea.",
    "Guinea-Bissau.",
    "Guyana.",
    "Haiti.",
    "Holy See .",
    "Honduras.",
    "Hungary.",
    "Iceland.",
    "India.",
    "Indonesia.",
    "Iran.",
    "Iraq.",
    "Ireland.",
    "Israel.",
    "Italy.",
    "Ivory Coast.",
    "Jamaica.",
    "Japan.",
    "Jordan.",
    "Kazakhstan.",
    "Kenya.",
    "Kiribati.",
    "Kosovo .",
    "Kuwait.",
    "Kyrgyzstan.",
    "Laos.",
    "Latvia.",
    "Lebanon.",
    "Lesotho.",
    "Liberia.",
    "Libya.",
    "Liechtenstein.",
    "Lithuania.",
    "Luxembourg.",
    "Macedonia.",
    "Madagascar.",
    "Malawi.",
    "Malaysia.",
    "Maldives.",
    "Mali.",
    "Malta.",
    "Marshall Islands.",
    "Mauritania.",
    "Mauritius.",
    "Mexico.",
    "Micronesia.",
    "Moldova.",
    "Monaco.",
    "Mongolia.",
    "Montenegro.",
    "Morocco.",
    "Mozambique.",
    "Myanmar.",
    "Namibia.",
    "Nauru.",
    "Nepal.",
    "Netherlands.",
    "New Zealand.",
    "Nicaragua.",
    "Niger.",
    "Nigeria.",
    "Niue .",
    "Northern Cyprus .",
    "North Korea .",
    "Norway.",
    "Oman.",
    "Pakistan.",
    "Palau.",
    "Palestine.",
    "Panama.",
    "Papua New Guinea.",
    "Paraguay.",
    "Peru.",
    "Philippines.",
    "Poland.",
    "Portugal.",
    "Pridnestrovie .",
    "Qatar.",
    "Republic of Korea .",
    "Republic of the Congo .",
    "Romania.",
    "Russia.",
    "Rwanda.",
    "Sahrawi Arab Democratic Republic .",
    "Saint Kitts and Nevis.",
    "Saint Lucia.",
    "Saint Vincent and the Grenadines.",
    "Samoa.",
    "San Marino.",
    "São Tomé and Príncipe.",
    "Saudi Arabia.",
    "Senegal.",
    "Serbia.",
    "Seychelles.",
    "Sierra Leone.",
    "Singapore.",
    "Slovakia.",
    "Slovenia.",
    "Solomon Islands.",
    "Somalia.",
    "Somaliland .",
    "South Africa.",
    "South Korea .",
    "South Ossetia .",
    "South Sudan.",
    "Spain.",
    "Sri Lanka.",
    "Sudan.",
    "Suriname.",
    "Swaziland.",
    "Sweden.",
    "Switzerland.",
    "Syria.",
    "Taiwan.",
    "Tajikistan.",
    "Tanzania.",
    "Thailand.",
    "Timor-Leste .",
    "Togo.",
    "Tonga.",
    "Transnistria .",
    "Trinidad and Tobago.",
    "Tunisia.",
    "Turkey.",
    "Turkmenistan.",
    "Tuvalu.",
    "Uganda.",
    "Ukraine.",
    "United Arab Emirates.",
    "United Kingdom.",
    "United States.",
    "Uruguay.",
    "Uzbekistan.",
    "Vanuatu.",
    "Vatican City.",
    "Venezuela.",
    "Vietnam.",
    "Yemen.",
    "Zambia.",
    "Zimbabwe.",
    "Abkhazia.",
    "Artsakh.",
    "Cook Islands.",
    "Kosovo.",
    "Niue.",
    "Northern Cyprus.",
    "Sahrawi Arab Democratic Republic.",
    "Somaliland.",
    "South Ossetia.",
    "Taiwan.",
    "Transnistria"
];

var quoteSource=[
    {
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        name:"Francis of Assisi"
    },
    {
        quote:"Believe you can and you're halfway there.",
        name:"Theodore Roosevelt"
    },
    {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        name:"Confucius"
    },
    {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        name:"Thomas A. Edison"
    },
    {
        quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        name:"Confucius"
    },
    {
        quote:"Don't watch the clock; do what it does. Keep going.",
        name:"Sam Levenson"
    },
    {
        quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        name:"Ayn Rand"
    },
    {
        quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        name:"Ayn Rand"
    },
    {
        quote:"Expect problems and eat them for breakfast.",
        name:"Alfred A. Montapert"
    },
    {
        quote:"Start where you are. Use what you have. Do what you can.",
        name:"Arthur Ashe"
    },
    {
        quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        name:"Samuel Beckett"
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        name:"Oscar Wilde"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name:"Albert Einstein"
    },
    {
        quote:"Always remember that you are absolutely unique. Just like everyone else.",
        name:"Margaret Mead"
    },
    {
        quote:"Do not take life too seriously. You will never get out of it alive.",
        name:"Elbert Hubbard"
    },
    {
        quote:"People who think they know everything are a great annoyance to those of us who do.",
        name:"Isaac Asimov"
    },
    {
        quote:"Procrastination is the art of keeping up with yesterday.",
        name:"Don Marquis"
    },
    {
        quote:"Get your facts first, then you can distort them as you please.",
        name:"Mark Twain"
    },
    {
        quote:"A day without sunshine is like, you know, night.",
        name:"Steve Martin"
    },
    {
        quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
        name:"Ellen DeGeneres"
    },
    {
        quote:"Don't sweat the petty things and don't pet the sweaty things.",
        name:"George Carlin"
    },
    {
        quote:"Always do whatever's next.",
        name:"George Carlin"
    },
    {
        quote:"Atheism is a non-prophet organization.",
        name:"George Carlin"
    },
    {
        quote:"Hapiness is not something ready made. It comes from your own actions.",
        name:"Dalai Lama"
    }

];

function createQuotes() {
    document.getElementById("text5").style.visibility="hidden";
    document.getElementById("text4").style.visibility="hidden";
    document.getElementById("text3").style.visibility="hidden";
    document.getElementById("text2").style.visibility="hidden";
    document.getElementById("text").style.visibility="hidden";

    var numberOfQuotes = document.getElementById('numberField').value;
    switch(numberOfQuotes){
        case '5':
            document.getElementById("text5").innerHTML = createRandom2();
            document.getElementById("text5").style = "visible";
        case '4':
            document.getElementById("text4").innerHTML = createRandom2();
            document.getElementById("text4").style = "visible";
        case '3':
            document.getElementById("text3").innerHTML = createRandom2();
            document.getElementById("text3").style = "visible";
        case '2':
            document.getElementById("text2").innerHTML = createRandom2();
            document.getElementById("text2").style = "visible";
        case '1':
            document.getElementById("text").innerHTML = createRandom2();
            document.getElementById("text").style = "visible";
            break;
        default:
            console.log("No valid number");
    }
}
function createRandom2() {
    if ($('#r1').is(':checked')) {
        return createRandom()
    } else {
        return createRandom3();
    }
}

function createRandom() {
    quote = "";
    var beginningLength = beginning.length;
    quote = beginning[Math.floor(Math.random() * beginningLength)];

    var middleLength = middle.length;
    quote += middle[Math.floor(Math.random() * middleLength)];

    var endLength = end.length;
    quote += end[Math.floor(Math.random() * endLength)];
    return quote;
}

function createRandom3() {
    quote = "";
    var quoteLength = quoteSource.length;
    quote = quoteSource[Math.floor(Math.random()*quoteLength)];
    return quote['quote'];
}
