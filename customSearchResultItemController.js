({
    doInit : function(component, event, helper) {
        var sobject = component.get('v.record');
        var fieldName = component.get('v.fieldName');
        var formatText = component.find('fielddata');
		formatText.set("v.value",sobject[fieldName]);
    },
    
	redirectDetail : function(component, event, helper) {
        var navService = component.find('navService');
    
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                "recordId": component.get("v.recordId"),
                "objectApiName": component.get("v.obName"),
                "actionName": "view"
            }
        }
        navService.navigate(pageReference);
	}
    
})
