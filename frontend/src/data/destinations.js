// Raw (verbatim) lists from user input and a normalized version with corrected spellings
export const raw = {
  topCategories: ['BEACH STAYS','LUXURY STAYS','NATURE STAYS','CRUISE STAYS','TREE HOUSE STAYS'],
  domesticPackages: ['GUJARAT','RAJASTHAN','NORTH EAST','GOLDEN TRIANGLE','MADHYA PRADESH'],
  internationalQuick: ['THILAND','INDONESIA','VIETNAM','DUBAI','SINGAPORE','MALASIA','MAURITIUS','NEPAL','BHUTAN','GEORGEA','AZERBAIJAN','MALDIVES','ARMENIA','SEYCHELLS','SRILANKA'],
  divine: ['AYODHYA','VARANASI','PRAYAGRAJ','SHIRIDI','MADHURAI','KANYKUMARI','RAMESHWARAM','UJJAIN','SOMNATH - DWARAKA','JYOTIRLINGA TOUR','JAGANNATH PURI','HARIDWAR RISHIKESH'],
  domesticDetailed: [
    'Golden Triangle (Delhi, Mathura, Aagra, Ranthambore, Jaipur,Delhi)',
    'Shimla - Manali',
    'Gujarat tours( Allahabad , Somnath , Bhuj - Kutch )',
    'Rajasthan ( Jaipur, Udaipur, Jodhpur, Jaisalmer)',
    'Kashmir ( Srinagar , Gulmarg , Pahalgam )',
    'Leh Ladakh',
    'Uttarakhand ( Massori , Nainital )',
    'West Bengal tours ( Darjling , Kalimpong)',
    'North East tours ( Assam , Guwahati, Meghalaya)',
    'Ooty - Kodaikanal',
    'Goa tours',
    'Pondicherry',
    'Kerala tours ( Munnar - Alleppey- Kochi , Thekkady - Varkala, Wayanad)',
    'Hampi-Aihole-Pattadakal'
    
  ],
  internationalDetailed: [
    'Singapore','Malaysia','Indonesia ( Bali )','Vietnam ( Hanoi , Danang , Ho Chi Minh City , Phu Quoc )',
    'Thailand ( Bangkok , Pattaya , Phuket , Krabi )','Dubai- Abu Dhabi','Hong Kong - Macau','Mauritius','Philippines','Georgia','Azerbaijan','Maldives','Nepal','Bhutan','Japan'
  ],
  stays: [
    'Coorg','Chikmagalur','Sakleshpur','Mysore','Wayanad','Ooty','Kodaikanal','Goa','Pondicherry','Udupi','Mangalore','Gokarna','Dandeli','Khandala','Yercaud','Yelagiri','B.R. Hills','Masinagudi','Kabini','Nagarhole','Pench','Kanha','Sundarbans','Munnar','Alleppey','Thekkady','Edukku','Varkala','Powar','Bannerghatta','Nandi Hills','Shivanasamudra','Tumkur'
  ]
}

export const normalized = {
  topCategories: ['Beach stays','Luxury stays','Nature stays','Cruise stays','Tree house stays'],
  domesticPackages: ['Gujarat','Rajasthan','North East','Golden Triangle','Madhya Pradesh'],
  internationalQuick: ['Thailand','Indonesia','Vietnam','Dubai','Singapore','Malaysia','Mauritius','Nepal','Bhutan','Georgia','Azerbaijan','Maldives'],
  divine: [
    'Ayodhya','Varanasi','Prayagraj','Shirdi','Madurai','Kanyakumari','Rameshwaram','Ujjain','Somnath','Dwarka','Jyotirlinga pilgrimage','Jagannath Puri','Haridwar','Rishikesh','Udupi','Gokarna-Murudeshwara','Vaishno Devi Temple','Kamakhya Temple','Amritsar'
  ],
  domesticDetailed: [
    {title:'Golden Triangle', places:['Delhi','Mathura','Agra','Ranthambore','Jaipur']},
    {title:'Shimla - Manali'},
    {title:'Gujarat', places:['Prayagraj','Somnath','Bhuj (Kutch)']},
    {title:'Rajasthan', places:['Jaipur','Udaipur','Jodhpur','Jaisalmer']},
    {title:'Kashmir', places:['Srinagar','Gulmarg','Pahalgam']},
    {title:'Leh Ladakh'},
    {title:'Uttarakhand', places:['Mussoorie','Nainital']},
    {title:'West Bengal', places:['Darjeeling','Kalimpong']},
    {title:'North East', places:['Assam','Guwahati','Meghalaya']},
    {title:'Ooty - Kodaikanal'},
    {title:'Goa'},
    {title:'Pondicherry'},
    {title:'Kerala', places:['Munnar','Alleppey','Kochi','Thekkady','Varkala','Wayanad']},
    {title:'Hampi-Aihole-Pattadakal'},
    {title:'Madhya Pradesh'},
    {title:'Andaman'}
  ],
  internationalDetailed: [
    {title:'Singapore'},{title:'Malaysia'},{title:'Indonesia', places:['Bali']},
    {title:'Vietnam', places:['Hanoi','Danang','Ho Chi Minh City','Phu Quoc']},
    {title:'Thailand', places:['Bangkok','Pattaya','Phuket','Krabi']},
    {title:'UAE', places:['Dubai','Abu Dhabi']},
    {title:'Hong Kong & Macau'},{title:'Mauritius'},{title:'Philippines'},{title:'Georgia'},{title:'Azerbaijan'},{title:'Maldives'},{title:'Nepal'},{title:'Bhutan'},{title:'Japan'},{title:'Armenia'}
  ],
  stays: [
    'Coorg','Chikmagalur','Sakleshpur','Mysore','Wayanad','Ooty','Kodaikanal','Goa','Pondicherry','Udupi','Mangalore','Gokarna','Dandeli','Khandala','Yercaud','Yelagiri','B.R. Hills','Masinagudi','Kabini','Nagarhole','Pench','Kanha','Sundarbans','Munnar','Alleppey','Thekkady','Edukku','Varkala','Powar','Bannerghatta','Nandi Hills','Shivanasamudra','Tumkur'
  ],
  experientialCategories: ['Tree house stay','Forest stay','River front stay','Cave stay','Island stay','Hill station stay','Igloo stays','Tea estate stays','Heritage / palace stays','Luxury stays','Cruise stay','Homestay']
}

export default { raw, normalized }
