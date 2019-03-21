exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        name: 'David Dobbie',
        password: 'lStXXL9aE',
        email: 'ddobbie9c@psu.edu',
        phone: '464-625-7891',
        country: 'Philippines',
      },
      {
        name: 'Kathi Robley',
        password: 'ht9707R1u',
        email: 'krobley9d@mac.com',
        phone: '238-932-4540',
        country: 'Syria',
      },
      {
        name: 'Thekla Delgua',
        password: 'BWyTD6',
        email: 'tdelgua9e@blogtalkradio.com',
        phone: '335-998-1500',
        country: 'Argentina',
      },
      {
        name: 'Alvira Esser',
        password: 'WsUbIv2',
        email: 'aesser9f@wikimedia.org',
        phone: '141-790-2671',
        country: 'Bolivia',
      },
      {
        name: 'Dave Eagle',
        password: 'HDlMJvsJyuAh',
        email: 'deagle9g@zdnet.com',
        phone: '619-614-2710',
        country: 'Sri Lanka',
      },
      {
        name: 'Ellis Biddleston',
        password: 'bcQXZJcHO',
        email: 'ebiddleston9h@alexa.com',
        phone: '388-827-4241',
        country: 'China',
      },
      {
        name: 'Daffie Zoppo',
        password: 'DJs5gXlV',
        email: 'dzoppo9i@wired.com',
        phone: '794-323-9996',
        country: 'Japan',
      },
      {
        name: 'Web Godon',
        password: 'r0wVUkes',
        email: 'wgodon9j@stanford.edu',
        phone: '660-379-2638',
        country: 'Poland',
      },
      {
        name: 'Hartwell Brumby',
        password: 'ikWEj9YHZ',
        email: 'hbrumby9k@devhub.com',
        phone: '529-603-9908',
        country: 'China',
      },
      {
        name: 'Sharity Guerry',
        password: '0Fq64mX',
        email: 'sguerry9l@yelp.com',
        phone: '725-440-7701',
        country: 'Azerbaijan',
      },
      {
        name: 'Christiana Dibbe',
        password: 'FI4nFH5atj7',
        email: 'cdibbe9m@slashdot.org',
        phone: '683-945-3440',
        country: 'Peru',
      },
      {
        name: 'Corabelle Howick',
        password: 'zoK9aOFhVYC',
        email: 'chowick9n@businesswire.com',
        phone: '652-254-2031',
        country: 'Poland',
      },
      {
        name: 'Arline Swannie',
        password: 'XB6QjMMR',
        email: 'aswannie9o@blogtalkradio.com',
        phone: '885-156-3269',
        country: 'China',
      },
      {
        name: 'Maddi Curneen',
        password: 'FpY3Su',
        email: 'mcurneen9p@yellowpages.com',
        phone: '740-598-9851',
        country: 'Thailand',
      },
      {
        name: 'Jerrilee Melhuish',
        password: '8lc5GZ2d',
        email: 'jmelhuish9q@freewebs.com',
        phone: '267-273-8134',
        country: 'United States',
      },
      {
        name: 'Emmaline Clavey',
        password: 'eBkBxA3KAOf',
        email: 'eclavey9r@gnu.org',
        phone: '182-865-0205',
        country: 'Indonesia',
      },
      {
        name: 'Louise Rulf',
        password: 'Km6kha5jeR',
        email: 'lrulf9s@ucoz.com',
        phone: '471-881-6601',
        country: 'Cuba',
      },
      {
        name: 'Paulo Bussons',
        password: 'vhykIUIyXq0',
        email: 'pbussons9t@ycombinator.com',
        phone: '100-344-2097',
        country: 'Egypt',
      },
      {
        name: 'Gustavus Hockey',
        password: 'dEdNOTe',
        email: 'ghockey9u@technorati.com',
        phone: '894-803-1835',
        country: 'Russia',
      },
      {
        name: 'Grayce Stanyland',
        password: 'OZOWtYr',
        email: 'gstanyland9v@quantcast.com',
        phone: '130-757-8168',
        country: 'Turkmenistan',
      },
      {
        name: 'Gav Kunert',
        password: 'zESrQZqX',
        email: 'gkunert9w@ucoz.com',
        phone: '260-327-7742',
        country: 'China',
      },
      {
        name: 'Thornie Mariotte',
        password: 'rozzxEOfDEC',
        email: 'tmariotte9x@ft.com',
        phone: '752-709-5908',
        country: 'Sweden',
      },
      {
        name: 'Rosabelle Chieco',
        password: 'OVDP2pSj9',
        email: 'rchieco9y@time.com',
        phone: '372-217-4642',
        country: 'South Korea',
      },
      {
        name: 'Gauthier Kingsworth',
        password: 'YDkZlHHV5SY',
        email: 'gkingsworth9z@time.com',
        phone: '670-667-2897',
        country: 'Russia',
      },
      {
        name: 'Allister Marre',
        password: 'fOHtCkIBL',
        email: 'amarrea0@digg.com',
        phone: '148-744-7053',
        country: 'Indonesia',
      },
      {
        name: 'Halimeda Sperling',
        password: '7rlcWiHk',
        email: 'hsperlinga1@samsung.com',
        phone: '957-705-4642',
        country: 'Nigeria',
      },
      {
        name: 'Sunny Rizzo',
        password: '2R1Am2mPUf',
        email: 'srizzoa2@loc.gov',
        phone: '230-604-8502',
        country: 'China',
      },
      {
        name: 'Olav Ridges',
        password: 'gogLz8',
        email: 'oridgesa3@alibaba.com',
        phone: '437-124-2387',
        country: 'France',
      },
      {
        name: 'Wolfie Duerdin',
        password: '1do2OxtoV0i',
        email: 'wduerdina4@mlb.com',
        phone: '858-718-3988',
        country: 'Ivory Coast',
      },
      {
        name: 'Lissie Gorvin',
        password: '0AwW0b',
        email: 'lgorvina5@51.la',
        phone: '278-378-9222',
        country: 'Poland',
      },
      {
        name: 'Mathe Hold',
        password: 'ZNf2LX6rHFJ',
        email: 'mholda6@loc.gov',
        phone: '321-536-3371',
        country: 'United States',
      },
      {
        name: 'Edmund Brocklehurst',
        password: 'ACYRd1zU9',
        email: 'ebrocklehursta7@smugmug.com',
        phone: '449-126-1394',
        country: 'Poland',
      },
      {
        name: 'Joan Knok',
        password: 'TK8Q6OjWVih',
        email: 'jknoka8@yellowbook.com',
        phone: '902-719-4068',
        country: 'Bulgaria',
      },
      {
        name: 'Genna Marchelli',
        password: 'SeOfLhKN4olG',
        email: 'gmarchellia9@patch.com',
        phone: '727-313-6276',
        country: 'China',
      },
      {
        name: 'Teresita Batecok',
        password: 'YKymSXSCPa',
        email: 'tbatecokaa@hibu.com',
        phone: '227-349-9803',
        country: 'China',
      },
      {
        name: 'Elston Petrolli',
        password: 'yCNMh2z8',
        email: 'epetrolliab@wunderground.com',
        phone: '189-436-4189',
        country: 'Thailand',
      },
      {
        name: 'Debor McNeachtain',
        password: 'Vi0psO',
        email: 'dmcneachtainac@tamu.edu',
        phone: '232-167-2423',
        country: 'Germany',
      },
      {
        name: 'Alika Rickardsson',
        password: 'gmJVlI',
        email: 'arickardssonad@live.com',
        phone: '858-726-1185',
        country: 'China',
      },
      {
        name: 'Alexandros Labrone',
        password: 'H7EVHJK',
        email: 'alabroneae@posterous.com',
        phone: '837-823-9321',
        country: 'Russia',
      },
      {
        name: 'Sigismund Cashin',
        password: 'ddcLymhg',
        email: 'scashinaf@usgs.gov',
        phone: '842-893-0764',
        country: 'Indonesia',
      },
      {
        name: 'Erin Pawnsford',
        password: 'eL4gjVupZ',
        email: 'epawnsfordag@baidu.com',
        phone: '765-855-4083',
        country: 'Colombia',
      },
      {
        name: 'Bonita Myrkus',
        password: 'Edm6Z6SZVUfV',
        email: 'bmyrkusah@unc.edu',
        phone: '102-471-3695',
        country: 'Brazil',
      },
      {
        name: 'Berky Gorner',
        password: '1FzSMcTNq',
        email: 'bgornerai@harvard.edu',
        phone: '855-489-7935',
        country: 'China',
      },
      {
        name: 'Naoma Leppington',
        password: 'qUvPoKt5',
        email: 'nleppingtonaj@soup.io',
        phone: '232-886-6904',
        country: 'Greece',
      },
      {
        name: 'Urbain Glasby',
        password: 'VoQXYJEjzyVA',
        email: 'uglasbyak@cnet.com',
        phone: '632-803-2206',
        country: 'Poland',
      },
      {
        name: 'Shannon Francescuccio',
        password: 'IYK52fF',
        email: 'sfrancescuccioal@wunderground.com',
        phone: '914-335-8779',
        country: 'China',
      },
      {
        name: 'Tybalt MacCallester',
        password: 'c1bsDAX',
        email: 'tmaccallesteram@canalblog.com',
        phone: '615-721-3756',
        country: 'Sweden',
      },
      {
        name: 'Cherianne Umfrey',
        password: 'eALu1DZAmF',
        email: 'cumfreyan@tinyurl.com',
        phone: '683-131-0094',
        country: 'Indonesia',
      },
      {
        name: 'Yorgo Iacovolo',
        password: 'y2mZ4mbG52z',
        email: 'yiacovoloao@un.org',
        phone: '559-404-4365',
        country: 'Sudan',
      },
      {
        name: 'Marijo Conry',
        password: 'fsGSWxoX8BL',
        email: 'mconryap@wordpress.com',
        phone: '515-953-1111',
        country: 'China',
      },
      {
        name: 'Becki Gwynn',
        password: 'ohxBISTGgZEa',
        email: 'bgwynnaq@china.com.cn',
        phone: '195-271-2534',
        country: 'China',
      },
      {
        name: 'Rufe Heaney`',
        password: 'PvXQsesn2wsJ',
        email: 'rheaneyar@twitter.com',
        phone: '902-172-5441',
        country: 'Russia',
      },
      {
        name: 'Odelinda Luckham',
        password: '0AwHZh2UVV',
        email: 'oluckhamas@privacy.gov.au',
        phone: '688-640-5689',
        country: 'Russia',
      },
      {
        name: 'Jillana Ochterlony',
        password: 'lm9Lvkl1',
        email: 'jochterlonyat@nih.gov',
        phone: '115-967-0119',
        country: 'Indonesia',
      },
      {
        name: 'Doy Allkins',
        password: '4Y4nPH3kB1hp',
        email: 'dallkinsau@blogger.com',
        phone: '638-580-0682',
        country: 'China',
      },
      {
        name: 'Elie Witheridge',
        password: 'kr3gQ7WhRr7',
        email: 'ewitheridgeav@mysql.com',
        phone: '213-402-9979',
        country: 'Norway',
      },
      {
        name: 'Romona Anstice',
        password: 'MjVi2FJWtzz',
        email: 'ransticeaw@angelfire.com',
        phone: '449-372-7889',
        country: 'Saudi Arabia',
      },
      {
        name: 'Allx Heine',
        password: 'FEyVLx1XUXKD',
        email: 'aheineax@youtube.com',
        phone: '872-856-1549',
        country: 'China',
      },
      {
        name: 'Tuckie Lafuente',
        password: 'jXm85Qj',
        email: 'tlafuenteay@bing.com',
        phone: '543-343-2637',
        country: 'Philippines',
      },
      {
        name: 'Netty Cowoppe',
        password: 'isUhhf',
        email: 'ncowoppeaz@prlog.org',
        phone: '612-490-6555',
        country: 'Malaysia',
      },
      {
        name: 'Araldo Ockendon',
        password: 'ZcM0Ixb7yV',
        email: 'aockendonb0@toplist.cz',
        phone: '646-127-7736',
        country: 'South Africa',
      },
      {
        name: 'Clemente Empson',
        password: 'qmvW73bQM',
        email: 'cempsonb1@dedecms.com',
        phone: '807-611-0327',
        country: 'South Korea',
      },
      {
        name: 'Jewell Mowbray',
        password: 'gG3QiY',
        email: 'jmowbrayb2@ucsd.edu',
        phone: '716-747-5539',
        country: 'Sudan',
      },
      {
        name: 'Paxon Cham',
        password: 'AjKBA2kPnq',
        email: 'pchamb3@ucsd.edu',
        phone: '239-276-8995',
        country: 'Portugal',
      },
      {
        name: 'Lora Lascell',
        password: 'r3OwiS',
        email: 'llascellb4@rakuten.co.jp',
        phone: '308-636-1489',
        country: 'Indonesia',
      },
      {
        name: 'Gasper Andre',
        password: 'YYu84k',
        email: 'gandreb5@cocolog-nifty.com',
        phone: '270-549-3937',
        country: 'Mauritius',
      },
      {
        name: 'Farleigh Whelpdale',
        password: 'QHROZYNBIxcV',
        email: 'fwhelpdaleb6@amazon.com',
        phone: '817-809-8106',
        country: 'China',
      },
      {
        name: 'Gwyn Lesurf',
        password: 'vXQK5sTOz0Cf',
        email: 'glesurfb7@arizona.edu',
        phone: '213-148-2562',
        country: 'United States',
      },
      {
        name: 'Francklin Dionis',
        password: 'qI8nEvmdF5J1',
        email: 'fdionisb8@oakley.com',
        phone: '684-974-6727',
        country: 'Kazakhstan',
      },
      {
        name: 'Mable Albrook',
        password: 'jn6kw2a13',
        email: 'malbrookb9@craigslist.org',
        phone: '884-137-3016',
        country: 'China',
      },
      {
        name: 'Rosemarie Densumbe',
        password: '7SzgBVB',
        email: 'rdensumbeba@noaa.gov',
        phone: '375-697-5350',
        country: 'China',
      },
      {
        name: 'Maridel Cordle',
        password: '52SN5hbo',
        email: 'mcordlebb@networksolutions.com',
        phone: '355-925-1159',
        country: 'Poland',
      },
      {
        name: 'Hannah Marquand',
        password: 'hNctcpL',
        email: 'hmarquandbc@cbslocal.com',
        phone: '910-183-5983',
        country: 'Mexico',
      },
      {
        name: 'Adrea Pasterfield',
        password: 'hiX6tgm',
        email: 'apasterfieldbd@auda.org.au',
        phone: '207-798-9710',
        country: 'Peru',
      },
      {
        name: 'Demetra Cabral',
        password: 'W5Qvu9',
        email: 'dcabralbe@biblegateway.com',
        phone: '995-501-6659',
        country: 'Mexico',
      },
      {
        name: 'Lilla Dellar',
        password: 'iOAj6zDK',
        email: 'ldellarbf@clickbank.net',
        phone: '411-115-1346',
        country: 'France',
      },
      {
        name: 'Saunders Vescovo',
        password: 'VLwFHGD5Tt87',
        email: 'svescovobg@squarespace.com',
        phone: '193-152-3341',
        country: 'Slovenia',
      },
      {
        name: 'Dorothy Frangleton',
        password: 'ViCHvyGU',
        email: 'dfrangletonbh@stumbleupon.com',
        phone: '250-395-0110',
        country: 'Indonesia',
      },
      {
        name: 'Taffy Waller-Bridge',
        password: 'WgbiAFVjn8',
        email: 'twallerbridgebi@icio.us',
        phone: '930-749-8393',
        country: 'Aland Islands',
      },
      {
        name: 'Mollee Daish',
        password: 'wDaSD4yC',
        email: 'mdaishbj@unblog.fr',
        phone: '669-602-8061',
        country: 'China',
      },
      {
        name: 'Vivian Bartak',
        password: 'Gb8txKktFdCY',
        email: 'vbartakbk@seesaa.net',
        phone: '305-411-3345',
        country: 'Indonesia',
      },
      {
        name: 'Fred Minard',
        password: 'Q6DOmIx9xrl',
        email: 'fminardbl@google.ca',
        phone: '264-735-0672',
        country: 'Thailand',
      },
      {
        name: 'Kelsi Dorant',
        password: 'bMNkAYRezc',
        email: 'kdorantbm@cnet.com',
        phone: '162-816-5943',
        country: 'Slovenia',
      },
      {
        name: 'Dunn Dawley',
        password: 'm8qeNUFi9',
        email: 'ddawleybn@yahoo.com',
        phone: '143-699-9443',
        country: 'Colombia',
      },
      {
        name: 'Beverlie Ridout',
        password: 'TMU7hMXkcx',
        email: 'bridoutbo@nymag.com',
        phone: '111-888-8935',
        country: 'China',
      },
      {
        name: 'Mireille Fryatt',
        password: 'p4G87xZeDV4n',
        email: 'mfryattbp@sogou.com',
        phone: '441-936-0269',
        country: 'Russia',
      },
      {
        name: 'Katherine Aylward',
        password: 'd5vr4vn',
        email: 'kaylwardbq@woothemes.com',
        phone: '497-941-1101',
        country: 'Portugal',
      },
      {
        name: 'Mill Ludye',
        password: 'BwHNKEy',
        email: 'mludyebr@usatoday.com',
        phone: '741-510-4948',
        country: 'Pakistan',
      },
      {
        name: 'Laureen Wilkie',
        password: '0qBdUHEQ',
        email: 'lwilkiebs@networksolutions.com',
        phone: '509-751-8501',
        country: 'Japan',
      },
      {
        name: 'Pearce Madrell',
        password: 'n2oL36Q9',
        email: 'pmadrellbt@google.com.au',
        phone: '993-372-2054',
        country: 'Brazil',
      },
      {
        name: 'Easter Lyngsted',
        password: 'KvzcJU',
        email: 'elyngstedbu@tuttocitta.it',
        phone: '951-825-1868',
        country: 'Indonesia',
      },
      {
        name: 'Ade Mosen',
        password: 'YFODHDyj',
        email: 'amosenbv@dmoz.org',
        phone: '745-769-6703',
        country: 'China',
      },
      {
        name: 'Debi Slatter',
        password: '94K29Q8T9id',
        email: 'dslatterbw@mashable.com',
        phone: '770-836-3011',
        country: 'Bolivia',
      },
      {
        name: 'Ransell Behling',
        password: 'C3joZblnV',
        email: 'rbehlingbx@unicef.org',
        phone: '756-561-8740',
        country: 'Czech Republic',
      },
      {
        name: 'Ollie Clemson',
        password: 'cpLp8RUUK46',
        email: 'oclemsonby@latimes.com',
        phone: '404-248-1529',
        country: 'United States',
      },
      {
        name: 'Batholomew Yeskin',
        password: 'jFVyfh',
        email: 'byeskinbz@un.org',
        phone: '600-205-3247',
        country: 'France',
      },
      {
        name: 'Derwin Applegate',
        password: '8YLg4F',
        email: 'dapplegatec0@xing.com',
        phone: '600-933-2240',
        country: 'China',
      },
      {
        name: 'Darci Conan',
        password: 'CVgKVT569Jr',
        email: 'dconanc1@apple.com',
        phone: '625-223-0954',
        country: 'Russia',
      },
      {
        name: 'Dora Haldon',
        password: 'vrS5GD3Hpy',
        email: 'dhaldonc2@gizmodo.com',
        phone: '113-506-9102',
        country: 'China',
      },
      {
        name: 'Arabel Baelde',
        password: 'KBrDR5',
        email: 'abaeldec3@hp.com',
        phone: '989-583-1715',
        country: 'Morocco',
      },
      {
        name: 'Shay Barbrick',
        password: '91p3Nng',
        email: 'sbarbrickc4@cnet.com',
        phone: '575-237-2978',
        country: 'France',
      },
      {
        name: 'Vevay Arundel',
        password: 'Qsvn4SpYis',
        email: 'varundelc5@latimes.com',
        phone: '971-569-7197',
        country: 'United States',
      },
      {
        name: 'Victor McJarrow',
        password: 'gpTljDtQlL',
        email: 'vmcjarrowc6@squidoo.com',
        phone: '412-103-6693',
        country: 'Mexico',
      },
      {
        name: 'Page Lamming',
        password: 'IQdkZjF',
        email: 'plammingc7@miitbeian.gov.cn',
        phone: '589-920-6231',
        country: 'Portugal',
      },
      {
        name: 'Magda Regorz',
        password: 'np4ardDAi1a',
        email: 'mregorzc8@miibeian.gov.cn',
        phone: '914-662-3480',
        country: 'Indonesia',
      },
      {
        name: 'Jemima Walker',
        password: 'Wt5kwzPUoA',
        email: 'jwalkerc9@desdev.cn',
        phone: '179-879-2629',
        country: 'Sierra Leone',
      },
      {
        name: 'Corey Biffin',
        password: 'nDnxNwNU',
        email: 'cbiffinca@blogtalkradio.com',
        phone: '531-950-3111',
        country: 'Pakistan',
      },
      {
        name: 'Joseito Wathey',
        password: 'ZzqnkNhn',
        email: 'jwatheycb@rakuten.co.jp',
        phone: '801-205-0092',
        country: 'Greece',
      },
      {
        name: 'Netta Lautie',
        password: 'VQSOyy',
        email: 'nlautiecc@mlb.com',
        phone: '291-225-1989',
        country: 'Russia',
      },
      {
        name: 'Brigid Gynni',
        password: 'fuTAvMFT6sCR',
        email: 'bgynnicd@wix.com',
        phone: '119-495-7821',
        country: 'Montserrat',
      },
      {
        name: 'Roby Conrath',
        password: 'YY9mgjH',
        email: 'rconrathce@tripod.com',
        phone: '250-955-6358',
        country: 'Uzbekistan',
      },
      {
        name: 'Keenan Barehead',
        password: '8M7vg3V',
        email: 'kbareheadcf@ebay.co.uk',
        phone: '880-764-8796',
        country: 'Brazil',
      },
      {
        name: 'Jan Davenhill',
        password: 'RW6cSNpG',
        email: 'jdavenhillcg@hugedomains.com',
        phone: '340-471-2119',
        country: 'Indonesia',
      },
      {
        name: 'Gwenneth Tabbernor',
        password: '8mFPyJlo7K6a',
        email: 'gtabbernorch@npr.org',
        phone: '237-147-7191',
        country: 'Comoros',
      },
      {
        name: 'Miller Paule',
        password: 'vNM0Jt',
        email: 'mpauleci@hhs.gov',
        phone: '503-329-8982',
        country: 'Russia',
      },
      {
        name: 'Theadora Ayshford',
        password: 'YP7w4WasBrVh',
        email: 'tayshfordcj@irs.gov',
        phone: '641-106-9736',
        country: 'Bolivia',
      },
      {
        name: 'Marina Kubas',
        password: 'XsXFjh',
        email: 'mkubasck@cbslocal.com',
        phone: '722-131-8736',
        country: 'China',
      },
      {
        name: 'Lynna Dory',
        password: 'KFI1zWSD4W',
        email: 'ldorycl@netvibes.com',
        phone: '649-571-8538',
        country: 'Philippines',
      },
      {
        name: 'Tallou Villaron',
        password: '9Mu53Umi3CKO',
        email: 'tvillaroncm@marriott.com',
        phone: '131-198-2872',
        country: 'France',
      },
      {
        name: 'Marcille Riccardelli',
        password: 'URzOJWCv7n',
        email: 'mriccardellicn@theguardian.com',
        phone: '584-786-5686',
        country: 'Philippines',
      },
      {
        name: 'Zena Ownsworth',
        password: 'RoZD59nNOkA',
        email: 'zownsworthco@simplemachines.org',
        phone: '171-952-9844',
        country: 'Indonesia',
      },
      {
        name: 'Doe Handy',
        password: 'LrYaQ2wgJv',
        email: 'dhandycp@tripadvisor.com',
        phone: '200-218-4733',
        country: 'China',
      },
      {
        name: 'Karalee Kill',
        password: 'afgbes4',
        email: 'kkillcq@soup.io',
        phone: '223-356-6032',
        country: 'Indonesia',
      },
      {
        name: 'Hobie Crowhurst',
        password: '7FR1OriI4',
        email: 'hcrowhurstcr@sourceforge.net',
        phone: '287-787-6185',
        country: 'Thailand',
      },
      {
        name: 'Marti Vasilkov',
        password: 'i0yYHID6U25',
        email: 'mvasilkovcs@acquirethinamecom',
        phone: '500-510-2157',
        country: 'Brazil',
      },
      {
        name: 'Stanwood Coda',
        password: 'cGOMx93KD7IX',
        email: 'scodact@imgur.com',
        phone: '434-750-9631',
        country: 'Japan',
      },
      {
        name: 'Kacie Gaskamp',
        password: 'vFOM0NRel',
        email: 'kgaskampcu@instagram.com',
        phone: '563-789-0146',
        country: 'France',
      },
      {
        name: 'Mimi Waymont',
        password: 'I2uH2TK7K',
        email: 'mwaymontcv@springer.com',
        phone: '376-430-1354',
        country: 'Lithuania',
      },
      {
        name: 'Tamara Rizzotto',
        password: 'Pg9fle4CRsa',
        email: 'trizzottocw@washingtonpost.com',
        phone: '781-897-8468',
        country: 'El Salvador',
      },
      {
        name: 'Cacilia Blight',
        password: 'cLhmYy1nf',
        email: 'cblightcx@google.com.br',
        phone: '386-880-2116',
        country: 'Cuba',
      },
      {
        name: 'Jodie Adriaens',
        password: 'eWw4VQLgK',
        email: 'jadriaenscy@bravesites.com',
        phone: '346-198-1207',
        country: 'Portugal',
      },
      {
        name: 'Laurent Shilburne',
        password: 'sZ8atXch',
        email: 'lshilburnecz@google.com.au',
        phone: '909-895-5084',
        country: 'Mongolia',
      },
      {
        name: 'Yvor Josephy',
        password: 'ZZBBk2IWccx',
        email: 'yjosephyd0@rediff.com',
        phone: '363-460-0064',
        country: 'Kenya',
      },
      {
        name: 'Theresa Creyke',
        password: 'Pwo6PSW2',
        email: 'tcreyked1@prnewswire.com',
        phone: '393-719-5052',
        country: 'Afghanistan',
      },
      {
        name: 'Trenna De Lorenzo',
        password: 'LOcyjh9z',
        email: 'tded2@canalblog.com',
        phone: '818-405-9354',
        country: 'Japan',
      },
      {
        name: 'Noelle Krollmann',
        password: '06FDLSjV9EiX',
        email: 'nkrollmannd3@amazon.com',
        phone: '697-855-3794',
        country: 'South Sudan',
      },
      {
        name: 'Jesus Bartoshevich',
        password: 'wNV2cnBXLQXn',
        email: 'jbartoshevichd4@odnoklassniki.ru',
        phone: '807-380-3710',
        country: 'Greece',
      },
      {
        name: 'Ashley Leverington',
        password: 'lQE7VTZs',
        email: 'aleveringtond5@shinystat.com',
        phone: '998-924-0831',
        country: 'Indonesia',
      },
      {
        name: 'Pernell Conor',
        password: 'eZieSD0N',
        email: 'pconord6@mtv.com',
        phone: '711-301-6683',
        country: 'Russia',
      },
      {
        name: 'Arri Bartkowiak',
        password: '8Bi8MXwh',
        email: 'abartkowiakd7@elegantthemes.com',
        phone: '572-245-2085',
        country: 'Sri Lanka',
      },
      {
        name: 'Rowan Fosse',
        password: '2uoqrGADBqv',
        email: 'rfossed8@freewebs.com',
        phone: '531-877-8451',
        country: 'Saint Lucia',
      },
      {
        name: 'Thor Meaders',
        password: 'zK2V5wOc0p1',
        email: 'tmeadersd9@opera.com',
        phone: '384-746-3637',
        country: 'Tunisia',
      },
      {
        name: 'Mozelle Ralton',
        password: 'tFN65L',
        email: 'mraltonda@seattletimes.com',
        phone: '599-331-8108',
        country: 'Indonesia',
      },
      {
        name: 'Torie Krolman',
        password: 'eIgVonUQn1TG',
        email: 'tkrolmandb@amazon.com',
        phone: '276-129-7083',
        country: 'Uzbekistan',
      },
      {
        name: 'Carolann Vayne',
        password: 'NMq7Lj03Qw',
        email: 'cvaynedc@indiatimes.com',
        phone: '654-349-9037',
        country: 'Indonesia',
      },
      {
        name: 'Ricoriki Spedroni',
        password: 'O1FEkms7fDK',
        email: 'rspedronidd@wordpress.org',
        phone: '205-333-6009',
        country: 'China',
      },
      {
        name: 'Kirbie Hendrikse',
        password: '7xJTMv',
        email: 'khendriksede@booking.com',
        phone: '145-322-5158',
        country: 'Indonesia',
      },
      {
        name: 'Boy Piburn',
        password: '6aDiyy',
        email: 'bpiburndf@hhs.gov',
        phone: '734-718-5311',
        country: 'Jamaica',
      },
      {
        name: 'Hilary Boow',
        password: 'exDtQkvcR',
        email: 'hboowdg@amazon.de',
        phone: '319-445-9393',
        country: 'Indonesia',
      },
      {
        name: 'Constantine Janes',
        password: 'xwfD9c',
        email: 'cjanesdh@t.co',
        phone: '118-243-6564',
        country: 'Brazil',
      },
      {
        name: 'Lori Fend',
        password: '5zhgioLn',
        email: 'lfenddi@cbc.ca',
        phone: '155-355-5912',
        country: 'Portugal',
      },
      {
        name: 'Giustino Pyford',
        password: 'tBFMYcG',
        email: 'gpyforddj@kickstarter.com',
        phone: '402-419-6560',
        country: 'United States',
      },
      {
        name: 'Chrystel Eckert',
        password: 'ty6TfAJaVrp',
        email: 'ceckertdk@businessweek.com',
        phone: '753-435-7827',
        country: 'Norway',
      },
      {
        name: 'Odilia Avrahamof',
        password: 'BoSypWwWm',
        email: 'oavrahamofdl@theglobeandmail.com',
        phone: '476-304-1588',
        country: 'Malawi',
      },
      {
        name: 'Laverne Hedgecock',
        password: 'AbJvP8LvuG5L',
        email: 'lhedgecockdm@booking.com',
        phone: '149-998-8143',
        country: 'Indonesia',
      },
      {
        name: 'Gwyneth Babber',
        password: 'rm9dEKE',
        email: 'gbabberdn@meetup.com',
        phone: '988-577-7842',
        country: 'Philippines',
      },
      {
        name: 'Anne Fulbrook',
        password: 'IQ3slRxy',
        email: 'afulbrookdo@infoseek.co.jp',
        phone: '682-147-4016',
        country: 'Albania',
      },
      {
        name: 'Seymour Nuzzti',
        password: 'U24qsyJfmZ',
        email: 'snuzztidp@newyorker.com',
        phone: '379-284-4981',
        country: 'China',
      },
      {
        name: 'Pris Brodley',
        password: 'rOaiKR9jS3z',
        email: 'pbrodleydq@domainmarket.com',
        phone: '219-757-7943',
        country: 'Brazil',
      },
      {
        name: 'Eugenia Braisby',
        password: 'zwAyK2',
        email: 'ebraisbydr@hibu.com',
        phone: '863-914-0063',
        country: 'Indonesia',
      },
      {
        name: 'Magdaia Parke',
        password: 'UZCEyTO3j89',
        email: 'mparkeds@abc.net.au',
        phone: '796-753-9361',
        country: 'Russia',
      },
      {
        name: 'Jamaal Footer',
        password: 'rCXmXxQ',
        email: 'jfooterdt@pinterest.com',
        phone: '272-783-6463',
        country: 'Indonesia',
      },
      {
        name: 'Celia Rawsthorn',
        password: 'GLLHIDy9R',
        email: 'crawsthorndu@go.com',
        phone: '660-724-1916',
        country: 'Iran',
      },
      {
        name: 'Aldis Botte',
        password: 'T3suMLNCbN',
        email: 'abottedv@latimes.com',
        phone: '442-811-2245',
        country: 'Portugal',
      },
    ]);
  });
};
