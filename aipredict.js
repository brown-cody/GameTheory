
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
        nnp = (nn/aiWinTotal).toFixed(4);
        npp = (np/aiWinTotal).toFixed(4);
        nsp = (ns/aiWinTotal).toFixed(4);
        pnp = (pn/aiWinTotal).toFixed(4);
        ppp = (pp/aiWinTotal).toFixed(4);
        psp = (ps/aiWinTotal).toFixed(4);
        snp = (sn/aiWinTotal).toFixed(4);
        spp = (sp/aiWinTotal).toFixed(4);
        ssp = (ss/aiWinTotal).toFixed(4);
        
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
        console.log('CALCULATE ALL RESULT OF ALL POSSIBLE STRATEGIES');
        
        var a = nnp; 
        var b = npp; 
        var choiceA = 'nnp';
        var choiceB = 'npp';
        
        console.log(choiceA + ' ' + a + ' ' + choiceB + ' ' + b);
    
        if (a > b) {
            b = nsp; 
            choiceB = 'nsp';
        } else {
            a = b;
            choiceA = 'npp';
            b = nsp;
            choiceB = 'nsp';
        }
        
        console.log('Bigger (choiceA): ' + choiceA);
        console.log(choiceA + ' ' + a + ' ' + choiceB + ' ' + b);
        
        if (a > b) {
            b = pnp; 
            choiceB = 'pnp';
        } else {
            a = b;
            choiceA = 'nsp';
            b = pnp; 
            choiceB = 'pnp';
        }
        
        console.log('Bigger (choiceA): ' + choiceA);
        console.log(choiceA + ' ' + a + ' ' + choiceB + ' ' + b);
        
        if (a > b) {
            b = ppp;
            choiceB = 'ppp';
        } else {
            a = b;
            choiceA = 'pnp';
            b = ppp;
            choiceB = 'ppp';
        }
        
        console.log('Bigger (choiceA): ' + choiceA);
        console.log(choiceA + ' ' + a + ' ' + choiceB + ' ' + b);
        
        if (a > b) {
            b = psp;
            choiceB = 'psp';
        } else {
            a = b;
            choiceA = 'ppp';
            b = psp;
            choiceB = 'psp';
        }
        
        console.log('Bigger (choiceA): ' + choiceA);
        console.log(choiceA + ' ' + a + ' ' + choiceB + ' ' + b);
        
        if (a > b) {
            b = snp;
            choiceB = 'snp';
        } else {
            a = b;
            choiceA = 'psp';
            b = snp;
            choiceB = 'snp';
        }
        
        console.log('Bigger (choiceA): ' + choiceA);
        console.log(choiceA + ' ' + a + ' ' + choiceB + ' ' + b);
        
        if (a > b) {
            b = spp;
            choiceB = 'spp';
        } else {
            a = b;
            choiceA = 'snp';
            b = spp;
            choiceB = 'spp';
        }
        
        console.log('Bigger (choiceA): ' + choiceA);
        console.log(choiceA + ' ' + a + ' ' + choiceB + ' ' + b);
        
        if (a > b) {
            b = ssp;
            choiceB = 'ssp';
        } else {
            a = b;
            choiceA = 'spp';
            b = ssp;
            choiceB = 'ssp';
        }
        
        console.log('Bigger (choiceA): ' + choiceA);
        console.log(choiceA + ' ' + a + ' ' + choiceB + ' ' + b);
        
        if (a > b) {
        } else {
            choiceA = 'ssp';
        }
        console.log('Biggest (choiceA): ' + choiceA);
        
        switch (choiceA) {
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
    
        nnp = (nnp * 100).toFixed(2);
        npp = (npp * 100).toFixed(2);
        nsp = (nsp * 100).toFixed(2);
        pnp = (pnp * 100).toFixed(2);
        ppp = (ppp * 100).toFixed(2);
        psp = (psp * 100).toFixed(2);
        snp = (snp * 100).toFixed(2);
        spp = (spp * 100).toFixed(2);
        ssp = (ssp * 100).toFixed(2);
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
}