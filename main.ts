function ultrasonic () {
    while (true) {
        let length = 0
        if (length < 10) {
            basic.pause(500)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
            basic.pause(500)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
            basic.pause(500)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
            basic.pause(200)
        } else {
        	
        }
    }
}
function turn_R () {
    while (true) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(200)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        }
        maqueen.motorStop(maqueen.Motors.All)
    }
}
function turn_L () {
    while (true) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        basic.pause(200)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            basic.pause(200)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            basic.pause(300)
        }
        maqueen.motorStop(maqueen.Motors.All)
    }
}
function turn_round () {
    while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(300)
    }
}
function line_stop () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && false)) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(100)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && false)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && false)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 75)
        }
    }
}
turn_R()
turn_L()
line_stop()
