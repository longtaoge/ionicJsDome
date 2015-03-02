angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })


    .controller('JsCtrl', function ($scope) {


    })


    .controller('ActionSheetCtrl', function ($scope, $ionicActionSheet, $timeout) {  /*ActionSheet 示例的控制器*/
        $scope.show = function () { //展示
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    {text: '<b>分</b> 享'},
                    {text: '移除'}
                ],
                destructiveText: '删除',
                titleText: '标题',
                cancelText: '取消',
                cancel: function () {
                    // 可以添加方法
                },
                buttonClicked: function (index) {
                    return true;
                }
            });
            // 设置超时后自动关闭
            $timeout(function () {
                hideSheet();
            }, 2000);
        };
    })

    .controller('BackdropCtrl', function ($scope, $ionicBackdrop, $timeout) {
        //显示一个阴影背景，时长一秒钟
        $scope.action = function () { // 通过方法调用
            $ionicBackdrop.retain();// 显示
            $timeout(function () { //设置超时时间
                $ionicBackdrop.release(); //关闭
            }, 1000);
        };
    })

    .controller('ContentCtrl', function ($scope) {

        /*content 控制器*/

    })
    .controller('EventsCtrl', function ($scope) {  /*events 控制器*/

        $scope.onHold = function () {
            alert("onHold");
        };
        $scope.onTap = function () {
            alert("onTap");
        };
        $scope.onTouch = function () {
            alert("onTouch");
        };
        $scope.onRelease = function () {
            alert("onRelease");
        };
        $scope.onDrag = function () {
            alert("onDrag");
        };
        $scope.onDragUp = function () {
            alert("onDragUp");
        };
        $scope.onDragRight = function () {
            alert("onDragRight");
        };
        $scope.onDragDown = function () {
            alert("onDragDown");
        };
        $scope.onDragLeft = function () {
            alert("onDragLeft");
        };
        $scope.onSwipe = function () {
            alert("onSwipe");
        };
        $scope.onSwipeUp = function () {
            alert("onSwipeUp");
        };
        $scope.onSwipeDown = function () {
            alert("onSwipeDown");
        };
        $scope.onSwipeRight = function () {
            alert("onSwipeRight");
        };
        $scope.onSwipeLeft = function () {
            alert("onSwipeLeft");
        };

    })
    .controller('IonRefresherCtrl', function ($scope, $http, $timeout) {
        $scope.items = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11];
        $scope.doRefresh = function () {
            // alert("正在执行，下拉刷新");
            $http.get('/new-items') //联网请求数据
                .success(function (newItems) {
                    $scope.items = newItems;
                })
                .finally(function () {
                    //停止下拉进度条
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };

        $scope.onPulling=function(){ //下拉时调用的方法
           // alert("onpulling");
        };
    })
    .controller('InfiniteScrollCtrl', function ($scope, $http, $timeout) {
        //     $scope.items = [1, 2, 3,5,6,7,8,9,10,11];

        $scope.doRefresh = function () {
            // alert("正在执行，下拉刷新");
            $http.get('/new-items') //联网请求数据
                .success(function (newItems) {
                    $scope.items = newItems;
                })
                .finally(function () {
                    //停止下拉进度条
                    // Stop the ion-refresher from spinning

                    $scope.$broadcast('scroll.refreshComplete');


                });
        };


        $scope.loadMore = function () {
          //  alert("loadmore");
            $scope.loading = false;
            $scope.noMoreItemsAvailable = false;
            // alert("正在执行，下拉刷新");
            $http.get('/new-items') //联网请求数据
                .success(function (newItems) {
                    $scope.items = newItems;
                })
                .finally(function () {
                    $timeout(function () {
                        $scope.items.push({id: $scope.items.length});
                        if ($scope.items.length == 30) {
                            $scope.noMoreItemsAvailable = true;
                        }
                        $scope.$broadcast('scroll.infiniteScrollComplete');
                    }, 1000);
                });


        };
        $scope.items = [];
    })

;
