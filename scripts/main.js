require.config({
 baseUrl : 'scripts'
});

requirejs(["app"],function(App){
	App.initialize();
});