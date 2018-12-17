function aipredictb() {
    
    strategyScore = {nnp:'hello',npp:0,nsp:0,pnp:0,ppp:0,psp:0,snp:0,spp:0,ssp:0}
    console.log('NNP:' + strategyScore.nnp);
    
    
    setStrategy = {nn:Math.abs(aiTry(nextNext())),np:Math.abs(aiTry(nextPrev())),ns:Math.abs(aiTry(nextSame())),pn:Math.abs(aiTry(prevNext())),pp:Math.abs(aiTry(prevPrev())),ps:Math.abs(aiTry(prevSame())),sn:Math.abs(aiTry(sameNext())),sp:Math.abs(aiTry(samePrev())),ss:Math.abs(aiTry(sameSame()))};
    
    strategies.push(setStrategy);
    
    if (strategies.length > 12) {
        strategies.shift();
    }

    var i;
    for (i = 0; i < strategies.length; i++) {
        strategyScore[nnp] += strategies[i].nn;
        strategyScore[npp] += strategies[i].np;
        strategyScore[nsp] += strategies[i].ns;
        strategyScore[pnp] += strategies[i].pn;
        strategyScore[ppp] += strategies[i].pp;
        strategyScore[psp] += strategies[i].ps;
        strategyScore[snp] += strategies[i].sn;
        strategyScore[spp] += strategies[i].sp;
        strategyScore[ssp] += strategies[i].ss;
    }

    var x = 0;
    var y = 1;
    for (x in strategyScore) {
        console.log('Testing ' + Object.keys(strategyScore.nnp));
        if (strategyScore.x > strategyScore.y) {
            strategyChoice = Object.keys(strategyScore);
        } else {
            strategyChoice = Object.keys(strategyScore);
        }
        y++;
    }

    switch (strategyChoice) {
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
/*
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
  */  
}