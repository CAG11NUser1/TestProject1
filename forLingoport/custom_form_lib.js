

function checkDupRecord(result) { 
// call this function to check if there is a duplicate record  
   if (result.length > 0){
   // reset all dropdowns so that the user cannot submit the request
      alert('This combination will create a duplicate record.  Please try a different combination._Translatable');
      ca_fdFetchSelectData('form1','Tenant');
      ca_fdFetchSelectData('form1','zOrg');
      ca_fdFetchSelectData('form1','zRegion');
   } 
} 


function validateRecordExists(result) {  
	
	// call this function to validate a record exists, if not, a record needs to be created first.
	var orgname = ca_fdGetTextFieldValue(ca_fd.formId, 'org_name');
   	if (result.length < 1 && orgname != "")
	{
      		alert('Selected tenant, support department and region combination is not registered for Monitoring Service. Please register the combination before onboard a user._Translatable');
	      // reset all dropdowns so that the user cannot submit the request	
			
			ca_fdResetFields(ca_fd.formId,['Tenant','zOrg','zRegion','tenant_id','org_name','regionname','SolutionConfigRecord']);
	} 
}


function handleFailure(){
    alert('report failed!_Translatable');
}
