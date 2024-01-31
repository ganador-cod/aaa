// selecting the ui
let show = document.querySelector('.print')
let Btn = document.querySelector('.butImg')

Btn.addEventListener('click',()=>{
    showFacts()
})

const factAfrica = [
    'Africa is the second-largest continent in the world both in size and population.',
    ' Islam is the dominant religion in Africa. Christianity is the second. Arabic is also the most widely-spoken language in Africa.',
    'Africa has the shortest coastline despite being the second largest continent in the world.',
    ' Africa is the most centrally located continent in the world. Both the prime meridian (0 degrees longitude), and the equator (0 degrees latitude) cut across it',
    ' Nigeria has the highest population (154.7 million people) in Africa. This represents 18% of Africas total population',
    'Both the worlds tallest and largest land animals both come from Africa. They are the giraffe and African elephant, respectively.',
    'Around 2,000 different languages are spoken in Africa and each of them have different dialects while Arabic is the language that is most widely spoken in the African continent.',
    'The worlds longest river -- the Nile -- and the worlds largest desert -- the Sahara -- both are home in Africa.',
    ' Algeria is the biggest country in Africa by land area.',
    'The worlds hottest place -- Ethiopia -- is in Africa.',
    'The continents terrain was inhabitable and remained unknown for thousands of years, earning it the name of (Dark Continent).',
    'The equator passes through the middle of the Dark Continent and it receives direct sunlight throughout the year',
    'The major animals in Africa include -- cheetah, African elephant, lion, zebra, Egyptian mongoose, giraffe, addax',
    ' The largest waterfall in Africa is the Victoria Falls and it is located on the Zimbabwe and Zambia border. It has a height of 355 feet and the width of the water fall runs into almost a mile',
    'More than 50% of the worlds French-speaking population lives here on the continent.',
    ' Angola has more Portuguese speakers than Portugal.',
    'Africa has a pink lake in Senegal.',
    ' Africa is the hottest continent on earth',
    'Nigerians are 1/5th the total population of Black Africa',
    'The Portuguese reached Nigeria in 1472. In 1880 the British began conquering Nigeria’s south. The north was conquered by 1903.',
    'Wole Soyinka is a Nigerian Nobel laureate. He wrote ‘Telephone Conversation!',
    'With a net worth of $16.1bn, Nigeria’s Aliko Dangote is the richest Black person in the world.',
    'Yoruba and their bloodlines worldwide have the highest rate of twinning (having twins) in the world.',
    'The 2006 Census found Nigerians to be the highest educated ethnic or racial group in America.',
    'The population of Lagos today is about more than the total population of all Eastern states combined.',
    ' Lagos’ population in 1872 was 60,000. By 2015 it will be the third largest city in the entire world.',
    'Nigeria’s north (719,000 sq. km), occupies 80% of Nigeria’s land mass. In size it is four times the South.',
    'Valor: Part of the ‘Forgotten Army,’ Nigerians volunteered to fight with the allied forces among the 81st and 82nd West African Divisions, in the Second World War.',
    'Kaduna Nzeogwu killed Sardauna in Nigeria’s first military coup.',
    'Travel Visa was not required to travel to the United Kingdom till 1984.',
    '. A brand new car sold for N2000 in 1975. A ticket to London was less than N100 in 1975',
    'In 1976, 75 kobo exchanged for one British Pound and 60 kobo for one US dollar.',
    'A dollar was 90 kobo at the beginning of Babangidas term in 1985.',
    'Nigeria took its first loan from the World Bank in 1977',
    'Obasanjo’s first term and Babangida’s regime oversaw the weakening of the naira.',
    'General Buhari and Idiagbon rejected IMF demands that Nigeria devalue its currency.',
    ' Nigeria, the 3rd biggest economy in Africa is 160th out of 177 countries in HDI (Human Development Index)',
    'Nigeria has the highest paid legislators in the entire world.',
]

function showFacts(){
    let randNumber = Math.floor(Math.random() * factAfrica.length)
    show.textContent = factAfrica[randNumber]
}

