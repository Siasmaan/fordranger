let length = 0
function stop () {
	
}
basic.forever(function () {
    length = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && false)) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && false)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 230)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 230)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && false)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 230)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 230)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) == 0) {
    	
    } else if (false) {
    	
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 250)
    }
})
