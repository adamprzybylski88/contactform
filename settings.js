module.exports = () => {

	const fontExtensions = [
		'eot',
		'ttf',
		'woff',
		'woff2'
	]

	const imagesSizing = [
		{	'name': 'xsm',	'size': 250		},
		{	'name': 'sm', 	'size': 500		},
		{	'name': 'md',	'size': 800		},
		{	'name': 'hd',	'size': 1200	},
		{	'name': 'lg',	'size': 1400	},
		{	'name': 'fhd',	'size': 1900	}
	]

	const svgTransform = [
	// 	{	colorName: 'light-green',
	// 		hash: '#02F385',
	// 		hashDarker: '#05aa5d'
	// 	}
	]

	return [

		/* contact form */
		{
			'projName': 			'Contact Form',
			'projNameShort': 		'cf',
			'instanceName': 		'contact_form',
			'instanceNameShort': 	'cf',

			'proxy':	[
							{
								source: '/',
								target: 'http://contact-form.local/'
							}
			],

			'watch':	[ 
							'site/src/'
			],

			'src':		{	
							'base':		'site/src/',

							'less': 	'site/src/less/project/settings/structure.less',
							
							'js': 		'site/src/js/base.js'
                                        
                            // 'react':    'site/src/app.jsx'
			},

			'dist': 	{				
							'base': 	{ 
											'dir': 'site/dist',		
											'options': 	{ 
															'dirStructure': false
														}		
										},

							'styles': 	{ 
											'dir': 'site/dist',		
											'options': 	{ 
															'dirStructure': false
														}		
										},

							'scripts': 	{ 
											'dir': 'site/dist',		
											'options': 	{ 
															'dirStructure': false
														}		
										},

							'react': { 
											'dir': 'site/dist',		
											'options': 	{ 
															'dirStructure': false
														}		
										},

							'json': 	{ 
											'dir': 'site/dist/json',
											'options': 	{ 
															'dirStructure': false
														}		
										},

							'fonts': 	{ 
											'dir': 'site/dist/fonts',
											'extensions': fontExtensions,	
											'options': 	{ 
															'dirStructure': false
														}		
										},

							'images': 	{ 
											'dir': 'site/dist/img',
											'options': 	{ 
															'dirStructure': false,
															'imagesSizing': imagesSizing,
															'svg': 			svgTransform
														}		
										},

							'pdf': 		{ 
											'dir': 'site/dist',		
											'options': 	{ 
															'dirStructure': true
														}		
										}
			}
        }
        
	]
}