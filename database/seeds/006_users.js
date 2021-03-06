exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        name: 'Lauree McMillan',
        password: 'w7J0y0g453Gs',
        email: 'lmcmillan7l@howstuffworks.com',
        phone: '144-677-9560',
        country: 'Russia',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Kristy Soanes',
        password: 'zNC8bOs7b919',
        email: 'ksoanes7m@tinyurl.com',
        phone: '283-270-2139',
        country: 'Cambodia',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Benedikta Skitt',
        password: 'QYyb2Ql',
        email: 'bskitt7n@geocities.com',
        phone: '454-397-0817',
        country: 'Botswana',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Colas Amorts',
        password: 'BCATpOFPXfa',
        email: 'camorts7o@usda.gov',
        phone: '359-363-8249',
        country: 'Philippines',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Marianna Janczewski',
        password: 'UuyOQMv',
        email: 'mjanczewski7p@aol.com',
        phone: '841-321-7638',
        country: 'Philippines',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Barde Meekin',
        password: 'FOR4iWcJ',
        email: 'bmeekin7q@slideshare.net',
        phone: '156-859-5511',
        country: 'Czech Republic',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Jecho Littlemore',
        password: 'P3FDU0JGG',
        email: 'jlittlemore7r@discovery.com',
        phone: '716-391-5312',
        country: 'United States',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Mathilde de Quesne',
        password: 'AbS40PyA',
        email: 'mde7s@wp.com',
        phone: '120-222-3020',
        country: 'Indonesia',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Etheline Challender',
        password: 'fXrMPXe7',
        email: 'echallender7t@surveymonkey.com',
        phone: '396-978-5762',
        country: 'Philippines',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Muire Payze',
        password: '29Mm1XULDw',
        email: 'mpayze7u@networkadvertising.org',
        phone: '720-443-9637',
        country: 'Indonesia',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Austin Howett',
        password: 'heen71Op',
        email: 'ahowett7v@purevolume.com',
        phone: '401-159-4732',
        country: 'Ukraine',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Gilli Paslow',
        password: 'MLsrgbavjRls',
        email: 'gpaslow7w@hexun.com',
        phone: '977-346-9892',
        country: 'Mexico',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Trenton Bigland',
        password: 'fvmF5qh5Tpw',
        email: 'tbigland7x@storify.com',
        phone: '407-830-7885',
        country: 'Sweden',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Cullen Spears',
        password: 'AC4ormbCZrKb',
        email: 'cspears7y@forbes.com',
        phone: '461-626-8103',
        country: 'Poland',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Sarge Divver',
        password: 'eYVu7LRU0ch',
        email: 'sdivver7z@europa.eu',
        phone: '412-208-3152',
        country: 'United States',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Gisella Brafferton',
        password: 'YiNMP8vOq89',
        email: 'gbrafferton80@pagesperso-orange.fr',
        phone: '595-458-5861',
        country: 'Indonesia',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Ashlan Yeats',
        password: 't3rhCBYc',
        email: 'ayeats81@newsvine.com',
        phone: '749-721-2908',
        country: 'Bangladesh',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Neron Stoyell',
        password: '0ZPJo6U',
        email: 'nstoyell82@si.edu',
        phone: '420-882-0500',
        country: 'China',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Murry Manger',
        password: 'bqBHHQRz',
        email: 'mmanger83@people.com.cn',
        phone: '222-457-5000',
        country: 'Sweden',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Lilias Neil',
        password: 'QeiuFo',
        email: 'lneil84@360.cn',
        phone: '764-931-0858',
        country: 'Nicaragua',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Kathe Antoniat',
        password: 'pBCSKcrZh',
        email: 'kantoniat85@woothemes.com',
        phone: '869-221-0419',
        country: 'Lithuania',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Adrian Horribine',
        password: 'wIRIFV9q',
        email: 'ahorribine86@nymag.com',
        phone: '750-603-7865',
        country: 'Central African Republic',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Kass Bonhome',
        password: 'NBmE3GB',
        email: 'kbonhome87@goo.gl',
        phone: '851-900-5590',
        country: 'Haiti',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Jeramey Rubens',
        password: 'yqCaSBAN',
        email: 'jrubens88@harvard.edu',
        phone: '723-422-2712',
        country: 'China',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Lyndsay Abbatucci',
        password: 'NG6UiU',
        email: 'labbatucci89@techcrunch.com',
        phone: '693-607-9116',
        country: 'Russia',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Arvy Fleetwood',
        password: '5HVCcEh',
        email: 'afleetwood8a@gravatar.com',
        phone: '531-299-2122',
        country: 'Egypt',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Gannon Itzakson',
        password: 'OQ3YVyQerD66',
        email: 'gitzakson8b@posterous.com',
        phone: '351-147-7551',
        country: 'Russia',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Siward Lettice',
        password: 'l46IfAthDMw',
        email: 'slettice8c@imdb.com',
        phone: '500-347-2078',
        country: 'Israel',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Elspeth Eite',
        password: '9uENaLs5pbpP',
        email: 'eeite8d@independent.co.uk',
        phone: '318-458-9018',
        country: 'China',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Bone Parysiak',
        password: '4Y0eeZKQgQ',
        email: 'bparysiak8e@reverbnation.com',
        phone: '763-477-4272',
        country: 'Mexico',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Claretta McKevany',
        password: '33aCTa3',
        email: 'cmckevany8f@ustream.tv',
        phone: '209-166-4078',
        country: 'United States',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Esteban Bardwall',
        password: 'DuxQ32Mbv',
        email: 'ebardwall8g@tamu.edu',
        phone: '268-128-2218',
        country: 'Brazil',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Gabbey Durran',
        password: 'EWzpsPEKC',
        email: 'gdurran8h@altervista.org',
        phone: '599-510-2311',
        country: 'Faroe Islands',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Corena Duckworth',
        password: 'pkZ1ILYuCx4',
        email: 'cduckworth8i@i2i.jp',
        phone: '761-703-8314',
        country: 'Aruba',
        org_id: 2,
        role_id: 2,
      },
      {
        name: 'Inglebert Isac',
        password: 'lnAa3TMFpWgX',
        email: 'iisac8j@ustream.tv',
        phone: '746-178-4560',
        country: 'Indonesia',
        org_id: 2,
        role_id: 2,
      },
    ]);
  });
};
