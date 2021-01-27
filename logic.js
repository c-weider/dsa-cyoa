$(document).ready(function(){
    if(!localStorage.dsa_currentPage)
    {
        localStorage.dsa_currentPage = 'start';
    }

    var current = localStorage.dsa_currentPage;
    if(!path[current])
    {
        localStorage.dsa_currentPage = 'fail';
        current = 'fail';
    }


    window.obj = path[current];
    if(!obj.success)
    {
        $('.submit-btn').hide();
        $('.reset-btn').show();
    }

    $('.text').html(obj.text);

    if(obj.distraction)
    {
        $('.submit-btn').hide();
        $('.reset-btn').hide();

    }

    if(obj.checkSkill)
    {
        $('.checks').html('');
        var skill = window.skills[obj.checkSkill];
        skill.checks.forEach(function(stat, i){
            var element = '<div class="stat"><div class="check-text">'+window.names[stat]+' ('+window.stats[stat]+'):</div><input min=1 max=20 required type="number" id="skill_'+i+'"></div>';
            $('.checks').append(element);
        });
        $('.checks').show();
    }

    if(obj.check)
    {
        var stat = obj.check;
        $('.checks').html('');
        var element = '<div class="stat"><div class="check-text">'+window.names[stat]+' ('+window.stats[stat]+'):</div><input min=1 max=20 required type="number" id="stat"></div>';
        $('.checks').append(element);

        $('.checks').show();
    }

    $('.link-a-btn').on('click', function(){

        localStorage.dsa_currentPage = obj.link_a;
        window.location = "/";
    });

    $('.link-b-btn').on('click', function(){

        localStorage.dsa_currentPage = obj.link_b;
        window.location = "/";
    });

    $('.submit-btn').on('click', function(){

        localStorage.dsa_currentPage = obj.success;

        if(obj.checkSkill)
        {
            var skill = window.skills[obj.checkSkill];
            var remaining = skill.value;
            var ones = 0;
            var twenties = 0;

            skill.checks.forEach(function(c, i){
                var stat = window.stats[c];
                var rolled = parseInt($('input#skill_'+i).val());
                if(isNaN(rolled))
                {
                    rolled = 20;
                }

                if(rolled == 1)
                {
                    ones += 1;
                }
                if(rolled == 20)
                {
                    twenties += 1;
                }
                if(rolled > stat)
                {
                    remaining += (stat - rolled);
                }
            });

            if((ones < 2) && (twenties > 1 || remaining < 0))
            {
                localStorage.dsa_currentPage = obj.fail;
            }
        }

        if(obj.check)
        {
            var stat = window.stats[obj.check];
            var rolled = parseInt($('input#stat').val());
            if(isNaN(rolled))
            {
                rolled = 20;
            }
            if(rolled > stat)
            {
                localStorage.dsa_currentPage = obj.fail;
            }
        }

        window.location = "/";
    });

    $('.reset-btn').on('click', function(){
        localStorage.dsa_currentPage = 'start';
        window.location = "/";
    });
});

