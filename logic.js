$(document).ready(function () {
    window.setLS = function (key, value) {
        var config = JSON.parse(localStorage.dsa);
        config[key] = value;
        localStorage.dsa = JSON.stringify(config);
    };
    window.getLS = function (key) {
        var config = JSON.parse(localStorage.dsa);
        if(!config[key])
        {
            return false;
        }
        return config[key];
    };
    window.setStat = function (key, value) {
        var stats = getLS('stats');
        if(!stats)
        {
            stats = {};
        }
        stats[key] = value;
        setLS('stats',stats);
    };
    window.getStat = function (key) {
        var stats = getLS('stats');
        if(!stats || !stats[key])
        {
            return false;
        }
        return stats[key];
    };

    if (!localStorage.dsa) {
        localStorage.dsa = '{}';
    }


    if (!getLS('currentPage')) {
        setLS('currentPage','start');
    }


    var current = getLS('currentPage');
    if (!path[current]) {
        current = 'fail';
        setLS('currentPage',current);
    }

    window.obj = path[current];

    if(obj.code) {
        obj.code();
    }

    if (!obj.success) {
        $('.submit-btn').hide();
        $('.reset-btn').show();
    }

    $('.text').html(obj.text);

    if (obj.distraction) {
        $('.submit-btn').hide();
        $('.reset-btn').hide();

    }

    if (obj.checkSkill) {
        $('.checks').html('');
        var skill = window.skills[obj.checkSkill];
        skill.checks.forEach(function (stat, i) {
            var element = '<div class="stat"><div class="check-text">' + window.names[stat] + ' (' + window.stats[stat] + '):</div><input min=1 max=20 required type="number" id="skill_' + i + '"></div>';
            $('.checks').append(element);
        });
        $('.checks').show();
    }

    if (obj.check) {
        var stat = obj.check;
        $('.checks').html('');
        var element = '<div class="stat"><div class="check-text">' + window.names[stat] + ' (' + window.stats[stat] + '):</div><input min=1 max=20 required type="number" id="stat"></div>';
        $('.checks').append(element);

        $('.checks').show();
    }

    if (getLS('unicorn')) {
        $('.unicorn').show();
    }

    $('.link-a-btn').on('click', function () {
        setLS('currentPage', obj.link_a);
        window.location.reload()
    });

    $('.link-b-btn').on('click', function () {
        setLS('currentPage', obj.link_b);
        window.location.reload()
    });

    $('.link-c-btn').on('click', function () {
        setLS('currentPage', obj.link_c);
        window.location.reload()
    });

    $('.link-d-btn').on('click', function () {
        setLS('currentPage', obj.link_d);
        window.location.reload()
    });

    $('.link-e-btn').on('click', function () {
        setLS('currentPage', obj.link_e);
        window.location.reload()
    });

    $('.submit-btn').on('click', function () {
        setLS('currentPage', obj.success);

        if (obj.checkSkill) {
            var skill = window.skills[obj.checkSkill];
            var remaining = skill.value;
            var ones = 0;
            var twenties = 0;

            skill.checks.forEach(function (c, i) {
                var stat = window.stats[c];
                var rolled = parseInt($('input#skill_' + i).val());
                if (isNaN(rolled)) {
                    rolled = 20;
                }

                if (rolled == 1) {
                    ones += 1;
                }
                if (rolled == 20) {
                    twenties += 1;
                }
                if (rolled > stat) {
                    remaining += (stat - rolled);
                }
            });

            if ((ones < 2) && (twenties > 1 || remaining < 0)) {
                setLS('currentPage', obj.fail);
            }
        }

        if (obj.check) {
            var stat = window.stats[obj.check];
            var rolled = parseInt($('input#stat').val());
            if (isNaN(rolled)) {
                rolled = 20;
            }
            if (rolled > stat) {
                setLS('currentPage', obj.fail);
            }
        }

        window.location.reload()
    });

    $('.reset-btn').on('click', function () {
        setLS('currentPage', 'start');
        window.location.reload()
    });
});

