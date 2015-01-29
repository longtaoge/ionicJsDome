angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})



    .controller('JsCtrl', function($scope) {




    })



    .controller('ActionSheetCtrl', function($scope, $ionicActionSheet, $timeout) {  /*ActionSheet 示例的控制器*/

        $scope.show = function() { //展示
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<b>分</b> 享' },
                    { text: '移除' }
                ],
                destructiveText: '删除',
                titleText: '标题',
                cancelText: '取消',
                cancel: function() {
                    // 可以添加方法
                },
                buttonClicked: function(index) {
                    return true;
                }
            });

            // 设置超时后自动关闭
            $timeout(function() {
                hideSheet();
            }, 2000);

        };

    })

    .controller('BackdropCtrl', function($scope, $ionicBackdrop, $timeout) {
        //显示一个阴影背景，时长一秒钟
        $scope.action = function() { // 通过方法调用
            $ionicBackdrop.retain();// 显示
            $timeout(function() { //设置超时时间
                $ionicBackdrop.release(); //关闭
            }, 1000);
        };
    })

    .controller('ContentCtrl', function($scope) {





    })




;
