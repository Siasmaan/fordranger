function turn_R () {
    while (true) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(300)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        }
        maqueen.motorStop(maqueen.Motors.All)
        break;
    }
}
function turn_L () {
    while (true) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        basic.pause(300)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        }
        maqueen.motorStop(maqueen.Motors.All)
        break;
    }
}
function turn_round () {
    while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(300)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            break;
        }
    }
}
function line_stop () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && false)) {
            maqueen.motorStop(maqueen.Motors.All)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && false)) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && false)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 75)
        }
        break;
    }
}
line_stop()
