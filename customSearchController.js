({

    doInit : function(component, event, helper) {
        console.log('doInit');
        var action = component.get('c.searchAllImages');
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
              var imagesList = response.getReturnValue();
            }
      	});
      	$A.enqueueAction(action);
    },
        
    handleClick : function(component, event, helper) {
      var searchText = component.get('v.searchText');
      var action = component.get('c.searchRecords');
      action.setParams({searchText: searchText});
      action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === 'SUCCESS') {
          var recordList = response.getReturnValue();
            component.set('v.recordList',recordList);
        }
      });
      $A.enqueueAction(action);
    }
    
})
