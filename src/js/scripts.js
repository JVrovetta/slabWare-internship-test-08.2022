function planSelector(planId){
    const newPlanSelected = document.getElementById(planId);
    if (newPlanSelected.getAttribute('class') == 'plan-content') {
        const oldPlanSelected = document.getElementsByClassName('plan-content selected')[0];
        oldPlanSelected.setAttribute('class', 'plan-content')
        newPlanSelected.setAttribute('class', 'plan-content selected')
    }
}