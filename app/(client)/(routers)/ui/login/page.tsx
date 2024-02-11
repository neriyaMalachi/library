import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="bg-slate-400 w-96 h-96 flex rounded-xl ">
              <div className="flex flex-col mt-9 items-center w-full ">
                <img
                  className="inline-block h-28 w-28 rounded-full ring-2 ring-white"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEX///8AAAAGBgb5+fkPDw/BwcEsLCwLCwu2trYjIyPd3d2YmJhISEh9fX0oKCjIyMjy8vJhYWE3NzdRUVEUFBSfn59aWlqsrKw8PDwcHBzQ0NDv7++Ojo5ra2ulpaWFhYV3d3fW1tZ5eXlMTEwyMjJERES7u7sNimXCAAAD3UlEQVR4nO1babqiQAy0aWVV9kUEBNzuf8SRT53nQ7STNtEfM3UAq4R0JZ2E2UwPYVF30T52LMuJ91FXF6HmD2nB9ZaGGMFYeu6H6L14TH5D7H2Avl8/ox+w7pnpZfvw7EdvopWc/JX5mn6AWfHxy6dv/1ck8D2DBMIvRMLF38H4heh4+G0ovxA2iwBQAFwQc/Cf4PxCnBgEvDSgMdb0/AsMvxALcgENTkBDLsDBCXCo+V0cvxDUudnDCqDOzEAX/gG1H5dYASUtv8TyC0GbE9ExSB2FSBsaQGtFGV5ARipghRewIhWANOIBtGYc4QVEpAJyvICcVADaCKmtcIkXsCQVgCqHLqAtir4u4Osx8HUf+LoT1ngBNamALV7AllTA19NxqGiMPMIgbpuhjYD6coY+BrSHQCMIqC+HEhkEBnmjCJkPaXPhAESDZgBDk8bH8Pv0/LjrKUfTWKZw/pSlV4mwAmoTuCAEN0kcpukF2IzoO1RXAHu1HRf/TAK69UKYjBODzVzNP9/w8c9mgVLBPODkVyvg5lcp4Oc/x8GLSDRZ3/8NcvWkNjBWrBOzO0w/hM/8/Qvk9jimP24/9fevcNu7AsFvPzU3/oWwt72u8+z+o5Pzfxzhqd2nL1qgWbpvT1wvpM+i6+lrnsS7vLYxzCajnuKH2+Tegc1Jww3u3WGeFGTHUha5NT718fjUy+3DYNXKbQoNdjSdfcpVsbm+7XBTrKYnKmnzbnW2OEz+8F+COM/j1+X64R0JrkZ37hGJrktWHbotMg1jp3UyF4ibkAqlxntYPET+O7DQCmj58Qqo+c8KUNViQM6PrFdfn35NmHB+jcYsBOBJokQuK0BRQlODRmscBmADvSJ0oN9IYY6IXpaAA/YISDLQNI4QfsngATdYkDDUmE3AATHkHaeAHUAAiwveAFizqzj5hVAvnLKGAGTPT2NbBAN1Pmh5Bai7yBrLGhioFzseWh+0UHshUyq+QT1KIboLPIOl4tdYGsNBZQQBtwBVL4/Zh9TpCDkexEM1UCy4BRQKAUwV+Q9UixWMBeEFqpEmW0l+g6ouZc5FQrQKAawF2QBVUaaxMoWDasGKORurBWisTuKgKggYr0UXqDY9/wv4+imomEsyR3kz2TBejs8VGWC2GLA1SIRIQa06F7SmoAMT2DcPmSKxgTfNN4gP26CIcaNljzgSUvRulcwIOxWHTGt8FeQk1yQj11+rqOrjmxqMY/3mV7ih3WgfS7Oxaea4bpb72JVOP8+Idwpc22uWgEzhLBvP5ttnkL3t1e2uiZL9+uCXc8OYl/5hvU+ipmtrz+6x4f4HMHQ+gCp86YUAAAAASUVORK5CYII="
                  alt="imageForLogin"
                />
                <div className="flex flex-col mt-9 items-center justify-around h-28  ">
                  <div className="flex items-center">
                    <img
                      className="inline-block h-7 w-7  ring-2 ring-white"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEX///8AAAAGBgb5+fkPDw/BwcEsLCwLCwu2trYjIyPd3d2YmJhISEh9fX0oKCjIyMjy8vJhYWE3NzdRUVEUFBSfn59aWlqsrKw8PDwcHBzQ0NDv7++Ojo5ra2ulpaWFhYV3d3fW1tZ5eXlMTEwyMjJERES7u7sNimXCAAAD3UlEQVR4nO1babqiQAy0aWVV9kUEBNzuf8SRT53nQ7STNtEfM3UAq4R0JZ2E2UwPYVF30T52LMuJ91FXF6HmD2nB9ZaGGMFYeu6H6L14TH5D7H2Avl8/ox+w7pnpZfvw7EdvopWc/JX5mn6AWfHxy6dv/1ck8D2DBMIvRMLF38H4heh4+G0ovxA2iwBQAFwQc/Cf4PxCnBgEvDSgMdb0/AsMvxALcgENTkBDLsDBCXCo+V0cvxDUudnDCqDOzEAX/gG1H5dYASUtv8TyC0GbE9ExSB2FSBsaQGtFGV5ARipghRewIhWANOIBtGYc4QVEpAJyvICcVADaCKmtcIkXsCQVgCqHLqAtir4u4Osx8HUf+LoT1ngBNamALV7AllTA19NxqGiMPMIgbpuhjYD6coY+BrSHQCMIqC+HEhkEBnmjCJkPaXPhAESDZgBDk8bH8Pv0/LjrKUfTWKZw/pSlV4mwAmoTuCAEN0kcpukF2IzoO1RXAHu1HRf/TAK69UKYjBODzVzNP9/w8c9mgVLBPODkVyvg5lcp4Oc/x8GLSDRZ3/8NcvWkNjBWrBOzO0w/hM/8/Qvk9jimP24/9fevcNu7AsFvPzU3/oWwt72u8+z+o5Pzfxzhqd2nL1qgWbpvT1wvpM+i6+lrnsS7vLYxzCajnuKH2+Tegc1Jww3u3WGeFGTHUha5NT718fjUy+3DYNXKbQoNdjSdfcpVsbm+7XBTrKYnKmnzbnW2OEz+8F+COM/j1+X64R0JrkZ37hGJrktWHbotMg1jp3UyF4ibkAqlxntYPET+O7DQCmj58Qqo+c8KUNViQM6PrFdfn35NmHB+jcYsBOBJokQuK0BRQlODRmscBmADvSJ0oN9IYY6IXpaAA/YISDLQNI4QfsngATdYkDDUmE3AATHkHaeAHUAAiwveAFizqzj5hVAvnLKGAGTPT2NbBAN1Pmh5Bai7yBrLGhioFzseWh+0UHshUyq+QT1KIboLPIOl4tdYGsNBZQQBtwBVL4/Zh9TpCDkexEM1UCy4BRQKAUwV+Q9UixWMBeEFqpEmW0l+g6ouZc5FQrQKAawF2QBVUaaxMoWDasGKORurBWisTuKgKggYr0UXqDY9/wv4+imomEsyR3kz2TBejs8VGWC2GLA1SIRIQa06F7SmoAMT2DcPmSKxgTfNN4gP26CIcaNljzgSUvRulcwIOxWHTGt8FeQk1yQj11+rqOrjmxqMY/3mV7ih3WgfS7Oxaea4bpb72JVOP8+Idwpc22uWgEzhLBvP5ttnkL3t1e2uiZL9+uCXc8OYl/5hvU+ipmtrz+6x4f4HMHQ+gCp86YUAAAAASUVORK5CYII="
                      alt="man"
                    />
                    <input
                      type="text"
                      placeholder="userName"
                      className="  p-1 "
                    />
                  </div>
                  <div className="flex items-center">
                    <img
                      className="inline-block h-7 w-7  ring-2 ring-white"
                      src="data:image/png;base64,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"
                      alt="lock"
                    />
                    <input
                      type="password"
                      placeholder="password"
                      className=" p-1"
                    />
                  </div>
                  <div className="  w-full">
                    <a href="#" className="text-xs">
                      FORGET PASSWORD?
                    </a>
                  </div>
                </div>
                <div className="flex mt-6 w-64 h-8 justify-center items-center bg-slate-200">
                  <button>LOGIN</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <h1>the code</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
