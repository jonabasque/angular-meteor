Meteor.startup(() => {
	if (Partidos.find().count() === 0) {
    		const partidos = [{
			'name': 'Partido Popular',
			'description': 'Enfermos e hijos de puta.'
    			}, {
      			'name': 'Partido Socialista Obrero Español',
      			'description': 'Estafadores hijos de puta.'
    			}, {
      			'name': 'Unidos Podemos',
      			'description': 'Posibles hijos de puta'
			}, {
			'name': 'Ciudadamos',
			'description': 'Liberales hijos de puta'	
			}
		];

    		partidos.forEach((partido) => {
      			Partidos.insert(partido)
    		});

  	}
});


