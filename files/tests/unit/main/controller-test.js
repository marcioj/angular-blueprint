describe('MainCtrl', function() {
  beforeEach(module('<%= modulePrefix %>'));

  it('displays a message', inject(function($controller) {
    let $scope = {};
    $controller('MainCtrl', { $scope: $scope })

    expect($scope.message).toBe('hello world');
  }));
});
