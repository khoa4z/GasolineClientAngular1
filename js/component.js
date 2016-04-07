app.component('carComponent'),{
    templateUrl:'carComponent.html',
    controller: 'CarCtrl',
    bindings: {
        hero: '<',
        onDelete: '&',
        onUpdate: '&'
    }
}

function CarCtrl($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
  };
}