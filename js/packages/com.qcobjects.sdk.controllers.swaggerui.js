'use strict';
Package('com.qcobjects.sdk.controllers.swaggerui',[
  Class('CustomSwaggerUIController',Controller,{
		startSwaggerUI: function (){
			_super_('SwaggerUIController','startSwaggerUI').call(this);
			Tag('.swagger-ui .topbar').map(e=>e.style.display='none');
		},
		done: function (){
			var controller = this;
			var nestedController = New(SwaggerUIController,{
				component:controller.component
			});
			nestedController.startSwaggerUI = controller.startSwaggerUI;
			nestedController.done();
		}
	})
]);
