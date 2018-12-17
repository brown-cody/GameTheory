
function aiPredict() {

        // TRY ALL 9 AI MODEL PERMUTATIONS
        nn += Math.abs(aiTry(nextNext()));
        np += Math.abs(aiTry(nextPrev()));
        ns += Math.abs(aiTry(nextSame()));
        pn += Math.abs(aiTry(prevNext()));
        pp += Math.abs(aiTry(prevPrev()));
        ps += Math.abs(aiTry(prevSame()));
        sn += Math.abs(aiTry(sameNext()));
        sp += Math.abs(aiTry(samePrev()));
        ss += Math.abs(aiTry(sameSame()));
        
        // FIND THE WIN PERCENTAGE OF EACH AI MODEL
        aiWinTotal = nn+np+ns+pn+pp+ps+sn+sp+ss;
        nnp = (nn/aiWinTotal * 100).toFixed(2);
        npp = (np/aiWinTotal * 100).toFixed(2);
        nsp = (ns/aiWinTotal * 100).toFixed(2);
        pnp = (pn/aiWinTotal * 100).toFixed(2);
        ppp = (pp/aiWinTotal * 100).toFixed(2);
        psp = (ps/aiWinTotal * 100).toFixed(2);
        snp = (sn/aiWinTotal * 100).toFixed(2);
        spp = (sp/aiWinTotal * 100).toFixed(2);
        ssp = (ss/aiWinTotal * 100).toFixed(2);
        
        //TESTING BLOCK
        /*nnp=9;
        npp=8;
        nsp=7;
        pnp=6;
        ppp=5;
        psp=4;
        snp=3;
        spp=2;
        ssp=1;*/
        
        // COMPARE ALL AI MODELS AND CHOOSE THE HIGHEST WIN PERCENTAGE
        
        //console.log('CALCULATE ALL RESULT OF ALL POSSIBLE STRATEGIES')
        
        var a = nnp; 
        var b = npp; 
        var choice = 'nnp'; 
        
        //console.log(choice + ' ' + a + ' npp ' + b);
    
        if (a > b) {
            b = nsp; 
        } else {
            a = b;
            choice = 'npp' 
            b = nsp;
        }
        
        //console.log('CHOICE: ' + choice)
        //console.log(choice + ' ' + a + ' nsp ' + b);
        
        if (a > b) {
            b = pnp; 
        } else {
            a = b;
            choice = 'nsp' 
            b = pnp; 
        }
        
        //console.log('CHOICE: ' + choice)
        //console.log(choice + ' ' + a + ' pnp ' + b);
        
        if (a > b) {
            b = ppp; 
        } else {
            a = b;
            choice = 'pnp' 
            b = ppp; 
        }
        
        //console.log('CHOICE: ' + choice)
        //console.log(choice + ' ' + a + ' ppp ' + b);
        
        if (a > b) {
            b = psp;
        } else {
            a = b;
            choice = 'ppp'
            b = psp;
        }
        
        //console.log('CHOICE: ' + choice)
        //console.log(choice + ' ' + a + ' psp ' + b);
        
        if (a > b) {
            b = snp;
        } else {
            a = b;
            choice = 'psp'
            b = snp;
        }
        
        //console.log('CHOICE: ' + choice)
        //console.log(choice + ' ' + a + ' snp ' + b);
        
        if (a > b) {
            b = spp;
        } else {
            a = b;
            choice = 'snp'
            b = spp;
        }
        
        //console.log('CHOICE: ' + choice)
        //console.log(choice + ' ' + a + ' spp ' + b);
        
        if (a > b) {
            b = ssp;
        } else {
            a = b;
            choice = 'spp'
            b = ssp;
        }
        
        //console.log('CHOICE: ' + choice)
        //console.log(choice + ' ' + a + ' ssp ' + b);
        
        if (a > b) {
        } else {
            choice = 'ssp'
        }
        console.log('CHOICE: ' + choice);
        
        switch (choice) {
            case 'nnp':
                aiMoveInt = nextNext();
                break;
            case 'npp':
                aiMoveInt = nextPrev();
                break;
            case 'nsp':
                aiMoveInt = nextSame();
                break;
            case 'pnp':
                aiMoveInt = prevNext();
                break;
            case 'ppp':
                aiMoveInt = prevPrev();
                break;
            case 'psp':
                aiMoveInt = prevSame();
                break;
            case 'snp':
                aiMoveInt = sameNext();
                break;
            case 'spp':
                aiMoveInt = samePrev();
                break;
            case 'ssp':
                aiMoveInt = sameSame();
                break;
        }
}