var menu = new Vue( {
	el : '#menu',
	data : {
		homeActive : false,
		projectsActive : false,
		servicesActive : false,
		contactActive : false,
		message : 'Please click on a menu item'
	},
	methods : {
		makeActive : function( item, label ) {
			console.log( 'makeActive');
			console.log( 'makeActive - item[', item, '] label[', label, ']' ); 
		
			//Remove active class from the previous anchor
			this.homeActive = false;
			this.projectsActive = false;
			this.servicesActive = false;
			this.contactActive = false;
			//Add active class to the selector anchor (item)
			switch( item ) {
				case 'homeMenu':
					this.homeActive = true;
					break;
				case 'projectsMenu':
					this.projectsActive = true;
					break;
				case 'servicesMenu':
					this.servicesActive = true;
					break;
				case 'contactMenu':
					this.contactActive = true;
					break;

			}


			// Change the text of the message
			this.message = 'You chose ' + label;

		}


	}
});