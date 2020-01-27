function sendIosAction() {
	try {
		webkit.messageHandlers.registrationSucceeded.postMessage(
	    		"success"
	    	);
    	} catch(err) {
        	console.log('The native context does not exist yet');
    	}
}

function sendAndroidAction() {
	//
}
