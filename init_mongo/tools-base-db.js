db.toolSources.drop();
db.toolAgents.drop();
db.toolDeployments.drop();
db.toolProjectConfigs.drop();
db.toolStageSteps.drop();
db.toolTests.drop();
db.userSettings.drop();
db.whitelist.drop();
db.autoSuggest.drop();
db.systemSettings.drop();
db.seleniumGridImages.drop();
db.seleniumGridImages.insert([
{
    "_id" : ObjectId("5e341deab156001114d6d767"),
    "browser" : "firefox",
    "version" : "62.0.3",
    "docker_version" : "3.14.0-gallium",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.251Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.251Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}
,{
    "_id" : ObjectId("5e341deab156001114d6d768"),
    "browser" : "chrome",
    "version" : "69.0.3497.100",
    "docker_version" : "3.14.0-gallium",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.253Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.253Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d769"),
    "browser" : "firefox",
    "version" : "67.0",
    "docker_version" : "3.141.59-oxygen",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.254Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.254Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d76a"),
    "browser" : "chrome",
    "version" : "74.0.3729.169",
    "docker_version" : "3.141.59-oxygen",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.255Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.255Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d76b"),
    "browser" : "firefox",
    "version" : "66.0.3",
    "docker_version" : "3.141.59-neon",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.256Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.256Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d76c"),
    "browser" : "chrome",
    "version" : "74.0.3729.108",
    "docker_version" : "3.141.59-neon",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.257Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.257Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d76d"),
    "browser" : "chrome",
    "version" : "74.0.3729.169",
    "docker_version" : "3.141.59-oxygen",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.258Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.258Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d76e"),
    "browser" : "firefox",
    "version" : "latest",
    "docker_version" : "3.141.59-mercury",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.259Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.259Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d76f"),
    "browser" : "chrome",
    "version" : "latest",
    "docker_version" : "3.141.59-mercury",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.261Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.261Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d770"),
    "browser" : "firefox",
    "version" : "65.0.2",
    "docker_version" : "3.141.59-lithium",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.262Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.262Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d771"),
    "browser" : "chrome",
    "version" : "73.0.3683.75",
    "docker_version" : "3.141.59-lithium",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.264Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.264Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d772"),
    "browser" : "firefox",
    "version" : "63.0.1",
    "docker_version" : "3.141.59-bismuth",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.265Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.265Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}

,
{
    "_id" : ObjectId("5e341deab156001114d6d773"),
    "browser" : "chrome",
    "version" : "70.0.3538.110",
    "docker_version" : "3.141.59-bismuth",
    "createdUser" : "",
    "createdDate" : ISODate("2020-01-31T12:30:34.267Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.267Z"),
    "_class" : "com.cognizant.leap.seleniumgrid.beans.Image"
}
]
);
db.systemSettings.insert([
{
    "_id" : "leap",
    "scm" : {
        "available" : [ 
            "gitlab", 
            "github", 
            "bitbucket"
        ],
        "selected" : [ 
            "gitlab", 
            "github", 
            "bitbucket"
        ]
    },
    "login" : {
        "available" : [ 
            "google", 
            "ldap", 
            "native", 
            "microsoft"
        ],
        "selected" : [ 
            "google", 
            "ldap", 
            "native", 
            "microsoft"
        ]
    },
    "dashboard" : {
        "theme" : "default",
        "items" : [ 
            {
                "_id" : "build-duration-series",
                "x" : 0,
                "y" : 0,
                "rows" : 4,
                "cols" : 8,
                "type" : "build-duration-series",
                "properties" : {
                    "interactive" : false,
                    "pie" : false
                },
                "template" : {
                    "title" : "Build Status",
                    "subTitle" : "(last #size:builds)",
                    "tooltip" : {
                        "messages" : [ 
                            "Build : #${series}", 
                            "Stage : ${label}", 
                            "Duration : #duration:${value}"
                        ]
                    }
                }
            }, 
            {
                "_id" : "build-status-group",
                "x" : 8,
                "y" : 0,
                "rows" : 4,
                "cols" : 4,
                "type" : "build-status-group",
                "properties" : {
                    "interactive" : false,
                    "pie" : false
                },
                "template" : {
                    "title" : "Build Status",
                    "subTitle" : "(last #size:builds)",
                    "tooltip" : {
                        "groupView" : [ 
                            "Last #size:builds", 
                            "${value} builds ${label}"
                        ],
                        "view" : [ 
                            "Build ${label} ran for #duration:${value}"
                        ]
                    }
                }
            }, 
            {
                "_id" : "stage-duration-series",
                "x" : 4,
                "y" : 4,
                "rows" : 4,
                "cols" : 8,
                "type" : "stage-duration-series",
                "properties" : {
                    "interactive" : false,
                    "pie" : false
                },
                "template" : {
                    "title" : "Build ${buildId} Stage Status"
                }
            }, 
            {
                "_id" : "stage-status-group",
                "x" : 0,
                "y" : 4,
                "rows" : 4,
                "cols" : 4,
                "type" : "stage-status-group",
                "properties" : {
                    "interactive" : false,
                    "pie" : false
                },
                "template" : {
                    "title" : "Build ${buildId} Stage Status",
                    "tooltip" : {
                        "groupView" : [ 
                            "Total #size:stages", 
                            "${value} stages ${label}"
                        ],
                        "view" : [ 
                            "Stage ${label} ran for #duration:${value}"
                        ]
                    }
                }
            }, 
            {
                "_id" : "sonar-analysis",
                "x" : 0,
                "y" : 8,
                "rows" : 4,
                "cols" : 12,
                "type" : "sonar-analysis",
                "properties" : {
                    "interactive" : false,
                    "pie" : false
                }
            }, 
            {
                "_id" : "log-analysis",
                "x" : 0,
                "y" : 12,
                "rows" : 4,
                "cols" : 12,
                "type" : "log-analysis",
                "properties" : {
                    "interactive" : false,
                    "pie" : false
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.119Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.126Z"),
    "_class" : "com.cognizant.leap.base.beans.SystemSetting"
}
]
);
db.autoSuggest.insert([

{
    "_id" : "docker",
    "fieldIds" : [ 
        "docker-args", 
        "docker-image"
    ],
    "items" : [ 
        "gradle", 
        "node", 
        "openjdk", 
        "webnicer/protractor-headless", 
        "maven:latest"
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.034Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.041Z"),
    "_class" : "com.cognizant.leap.jenkins.beans.autosuggest.AutoSuggest"
}

,
{
    "_id" : "slack",
    "fieldIds" : [ 
        "slack-message"
    ],
    "items" : [ 
        "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >'"
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.034Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.097Z"),
    "_class" : "com.cognizant.leap.jenkins.beans.autosuggest.AutoSuggest"
}

,
{
    "_id" : "junit",
    "fieldIds" : [ 
        "junit-result"
    ],
    "items" : [ 
        "target/test-reports/*.xml"
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.034Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.101Z"),
    "_class" : "com.cognizant.leap.jenkins.beans.autosuggest.AutoSuggest"
}
]
);
db.whitelist.insert([
{
    "_id" : "jenkins-url",
    "whitelist" : true,
    "type" : "url",
    "match" : [ 
        "^http(s?)://my.company.com.*", 
        "^http(s?)://localhost*"
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.317Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.324Z"),
    "_class" : "com.cognizant.leap.base.beans.WhiteList"
}

,
{
    "_id" : "gitlab-url",
    "whitelist" : true,
    "type" : "url",
    "match" : [ 
        "^http(s?)://api.gitlab.com.*", 
        "^http(s?)://localhost*"
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.317Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.372Z"),
    "_class" : "com.cognizant.leap.base.beans.WhiteList"
}

,
{
    "_id" : "github-url",
    "whitelist" : true,
    "type" : "url",
    "match" : [ 
        "^http(s?)://api.github.com.*", 
        "^http(s?)://localhost*"
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.317Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.375Z"),
    "_class" : "com.cognizant.leap.base.beans.WhiteList"
}

,
{
    "_id" : "bitbucket-url",
    "whitelist" : true,
    "type" : "url",
    "match" : [ 
        "^http(s?)://api.bitbucket.org.*", 
        "^http(s?)://localhost*"
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.317Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.378Z"),
    "_class" : "com.cognizant.leap.base.beans.WhiteList"
}
]
);
db.userSettings.insert([
{
    "_id" : "admin@leap.com",
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:34:46.794Z"),
    "_class" : "com.cognizant.leap.users.beans.UserSettings"
}
]
);
db.toolTests.insert([
{
    "_id" : "test-mvn-cucumber-selenium",
    "name" : "selenium",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/selenium.png",
        "name" : "Selenium",
        "type" : "image",
        "icons" : [ 
            {
                "data" : "assets/icons/maven.png",
                "name" : "Maven",
                "type" : "image"
            }, 
            {
                "data" : "assets/icons/testng.png",
                "name" : "TestNg",
                "type" : "image"
            }
        ]
    },
    "data" : {
        "type" : "integration-test",
        "client" : "mvn-cucumber-selenium",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo selenium tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.760Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-node-protractor",
    "name" : "protractor",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/protractor.png",
        "name" : "protractor",
        "type" : "image",
        "desc" : "protractor test"
    },
    "data" : {
        "type" : "e2e",
        "client" : "node-protractor",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "chmod 777 ./ci/scripts/functional-test.sh", 
                        "./ci/scripts/functional-test.sh"
                    ],
                    "windows" : null,
                    "linux" : null
                }
            }, 
            {
                "type" : "junit",
                "data" : {
                    "testResults" : "tests/*.xml",
                    "healthScaleFactor" : 1,
                    "allowEmptyResults" : false,
                    "keepLongStdio" : false
                }
            }, 
            {
                "type" : "slack",
                "data" : {
                    "type" : "SUCCESS",
                    "message" : "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >' - Smoke Test Completed (<${env.BUILD_URL}${\"testReport/\"}|TestReports>) (<https://app.saucelabs.com/dashboard/tests|SauceLabs Video>)"
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.770Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-mvn-cucumber-restassured",
    "name" : "rest assured",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/restassured.png",
        "name" : "restassured",
        "type" : "image",
        "desc" : "restassured api test"
    },
    "data" : {
        "type" : "api",
        "client" : "mvn-cucumber-restassured",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo rest assured"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.771Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-soapui",
    "name" : "soapui",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/soapui.png",
        "name" : "soapui",
        "type" : "image",
        "desc" : "soapui api test"
    },
    "data" : {
        "type" : "api",
        "client" : "soapui",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo soapui test"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.773Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-postman",
    "name" : "postman",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/postman.png",
        "name" : "postman",
        "type" : "image",
        "desc" : "postman api test"
    },
    "data" : {
        "type" : "api",
        "client" : "test-postman",
        "steps" : [ 
            {
                "type" : "script",
                "platforms" : [ 
                    "windows", 
                    "linux"
                ],
                "data" : {
                    "script" : [ 
                        "chmod 777 ./ci/scripts/functional-test.sh", 
                        "./ci/scripts/functional-test.sh"
                    ],
                    "windows" : {
                        "script" : [ 
                            "ci\\test.bat"
                        ]
                    },
                    "linux" : {
                        "script" : [ 
                            "chmod 777 ./ci/scripts/functional-test.sh", 
                            "./ci/scripts/functional-test.sh"
                        ]
                    }
                }
            }, 
            {
                "type" : "junit",
                "data" : {
                    "testResults" : "tests/*.xml",
                    "healthScaleFactor" : 1,
                    "allowEmptyResults" : false,
                    "keepLongStdio" : false
                }
            }, 
            {
                "type" : "slack",
                "data" : {
                    "type" : "SUCCESS",
                    "message" : "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >' - API Test Completed (<${env.BUILD_URL}${\"testReport/\"}|TestReports>)"
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.774Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-Jmeter",
    "name" : "Jmeter",
    "type" : "test",
    "group" : "non-functional",
    "icon" : {
        "data" : "assets/icons/jmeter.png",
        "name" : "JMeter",
        "type" : "image",
        "desc" : "Apache JMeter perf test"
    },
    "data" : {
        "type" : "performance",
        "client" : "jmeter",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo jmeter tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.775Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-Gatling",
    "name" : "Gatling",
    "type" : "test",
    "group" : "non-functional",
    "icon" : {
        "data" : "assets/icons/gatling.png",
        "name" : "gatling",
        "type" : "image",
        "desc" : "gatling performance test"
    },
    "data" : {
        "type" : "performance",
        "client" : "gatling",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo gatling perf tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.776Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-loadrunner",
    "name" : "Load Runner",
    "type" : "test",
    "group" : "non-functional",
    "icon" : {
        "data" : "assets/icons/loadrunner.png",
        "name" : "loadrunner",
        "type" : "image",
        "desc" : "loadrunner performance test"
    },
    "data" : {
        "type" : "performance",
        "client" : "loadrunner",
        "steps" : [ 
            {
                "type" : "sh",
                "data" : {
                    "script" : [ 
                        "echo loadrunner perf tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.777Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-owasp-zap",
    "name" : "Security Test",
    "type" : "test",
    "group" : "non-functional",
    "icon" : {
        "data" : "assets/icons/zap.png",
        "name" : "zap",
        "type" : "image",
        "desc" : "Zap Security Analysis"
    },
    "data" : {
        "type" : "security",
        "client" : "owasp",
        "steps" : [ 
            {
                "type" : "owasp-zap",
                "platforms" : [ 
                    "windows", 
                    "linux"
                ],
                "data" : {
                    "zapHost" : "localhost",
                    "zapPort" : "8095",
                    "zapHome" : "/opt/zaproxy",
                    "timeout" : "100",
                    "allowedHosts" : [],
                    "sessionPath" : "",
                    "targetHost" : "https://reqres.in",
                    "scanPolicyName" : "active",
                    "userId" : "1",
                    "env" : null,
                    "projectName" : null,
                    "projectKey" : null,
                    "projectVersion" : null,
                    "failAllAlerts" : "25",
                    "failHighAlerts" : "25",
                    "failMediumAlerts" : "25",
                    "failLowAlerts" : "25",
                    "falsePositivesFilePath" : "zapFalsePositives.json"
                }
            }, 
            {
                "type" : "sonar-zap-report",
                "platforms" : [ 
                    "windows", 
                    "linux"
                ],
                "data" : {
                    "env" : "SonarQube",
                    "projectName" : "",
                    "projectVersion" : "",
                    "projectKey" : "",
                    "script" : [ 
                        "mvn clean compile $SONAR_MAVEN_GOAL -Dsonar.zaproxy.reportPath=$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_NUMBER/zap/zap-raw.xml"
                    ]
                }
            }, 
            {
                "type" : "slack",
                "data" : {
                    "type" : "SUCCESS",
                    "message" : "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >' - Security Analysis Completed (<${currentBuild.absoluteUrl}zap|Open>)"
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.779Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-Sonar",
    "name" : "Sonar",
    "type" : "test",
    "group" : "other-services",
    "icon" : {
        "data" : "assets/icons/sonar.png",
        "name" : "Sonar",
        "type" : "image",
        "desc" : "Sonar static analysis"
    },
    "data" : {
        "type" : "unit",
        "client" : "sonar",
        "steps" : [ 
            {
                "type" : "sonar",
                "platforms" : [ 
                    "linux", 
                    "windows"
                ],
                "data" : {
                    "script" : [ 
                        "mvn clean install $SONAR_MAVEN_GOAL cobertura:cobertura -Dcobertura.report.format=xml  -Dsonar.cobertura.reportPath=target/site/cobertura/coverage.xml -Dsonar.zaproxy.reportPath=$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_NUMBER/zap/zap-raw.xml"
                    ],
                    "windows" : {
                        "script" : [ 
                            "mvn clean install %SONAR_MAVEN_GOAL% cobertura:cobertura -Dcobertura.report.format=xml  -Dsonar.cobertura.reportPath=target/site/cobertura/coverage.xml -Dsonar.zaproxy.reportPath=%JENKINS_HOME%/jobs/%JOB_NAME%/builds/%BUILD_NUMBER%/zap/zap-raw.xml"
                        ]
                    },
                    "linux" : {
                        "script" : [ 
                            "mvn clean install $SONAR_MAVEN_GOAL cobertura:cobertura -Dcobertura.report.format=xml  -Dsonar.cobertura.reportPath=target/site/cobertura/coverage.xml -Dsonar.zaproxy.reportPath=$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_NUMBER/zap/zap-raw.xml"
                        ]
                    },
                    "template" : "withSonarQubeEnv('%s') { %s }",
                    "env" : "SonarQube"
                }
            }, 
            {
                "type" : "slack",
                "data" : {
                    "type" : "SUCCESS",
                    "message" : "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >' - Static Code Analysis Completed (<${currentBuild.absoluteUrl}cobertura/|Open Code Coverage Report>) (<$SONAR_URL/dashboard?id=com.hantsylabs.restexample.springmvc%3Aangularjs-springmvc-sample-boot|Open SonarQube Report>)"
                }
            }, 
            {
                "type" : "jenkins-cobertura",
                "data" : {
                    "coberturaReportFile" : "target/site/cobertura/coverage.xml"
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.781Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-node-karma",
    "name" : "mochaJS",
    "type" : "test",
    "group" : "unittest",
    "icon" : {
        "data" : "assets/icons/mocha.png",
        "name" : "mocha",
        "type" : "image",
        "desc" : "mocha javascript test"
    },
    "data" : {
        "type" : "unit",
        "client" : "node-karma",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo karma tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.783Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "build-script",
    "name" : "Build",
    "type" : "test",
    "group" : "custom",
    "icon" : {
        "data" : "terminal",
        "name" : "build",
        "type" : "fa-icon",
        "desc" : "Build Script"
    },
    "data" : {
        "type" : "build",
        "client" : "script",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo build stage"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.784Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-ready-api",
    "name" : "ReadyApi",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/readyapi.png",
        "name" : "ReadyApi",
        "type" : "image",
        "desc" : "ready-api api test"
    },
    "data" : {
        "type" : "api",
        "client" : "ready-api",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo api tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.786Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-mvn-appium",
    "name" : "appium",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/appium.png",
        "name" : "Appium",
        "type" : "image",
        "desc" : "appium mobile test"
    },
    "data" : {
        "type" : "mobile",
        "client" : "appium",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo appium tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.787Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-fortify",
    "name" : "Fortify",
    "type" : "test",
    "group" : "non-functional",
    "icon" : {
        "data" : "assets/icons/fortify.png",
        "name" : "Fortify",
        "type" : "image",
        "desc" : "fortify security test"
    },
    "data" : {
        "type" : "security",
        "client" : "fortify",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo fortify security tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.788Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-tdm",
    "name" : "TDM",
    "type" : "test",
    "group" : "other-services",
    "icon" : {
        "data" : "assets/icons/tdm.png",
        "name" : "TDM",
        "type" : "image",
        "desc" : "test data management"
    },
    "data" : {
        "type" : "data",
        "client" : "tdm",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo test data management"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.789Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-devtest",
    "name" : "DevTest",
    "type" : "test",
    "group" : "other-services",
    "icon" : {
        "data" : "assets/icons/cadevtest.png",
        "name" : "devtest",
        "type" : "image",
        "desc" : "dev-test service virtualization"
    },
    "data" : {
        "type" : "sv",
        "client" : "devtest",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo devtest sv tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.790Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-mvn-junit",
    "name" : "junit",
    "type" : "test",
    "group" : "unittest",
    "icon" : {
        "data" : "assets/icons/junit.png",
        "name" : "junit",
        "type" : "image",
        "desc" : "junit test"
    },
    "data" : {
        "type" : "unit",
        "client" : "mvn-junit",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "mvn clean test"
                    ],
                    "windows" : null,
                    "linux" : null
                }
            }, 
            {
                "type" : "junit",
                "data" : {
                    "testResults" : "target/surefire-reports/*.xml",
                    "healthScaleFactor" : 1,
                    "allowEmptyResults" : false,
                    "keepLongStdio" : false
                }
            }, 
            {
                "type" : "slack",
                "data" : {
                    "type" : "SUCCESS",
                    "message" : "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >' - Unit Test Completed"
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.791Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-maven-cucumber-cypress",
    "name" : "cypress",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/cypress.png",
        "name" : "cypress",
        "type" : "image",
        "desc" : "Cypress Test Script"
    },
    "data" : {
        "type" : "integration-test",
        "client" : "maven-cucumber-appium",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo Cypress Test"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.792Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-sv",
    "name" : "Service Virtualization",
    "type" : "test",
    "group" : "other-services",
    "icon" : {
        "data" : "assets/icons/servicevirtualizations.png",
        "name" : "ServiceVirtualization",
        "type" : "image",
        "desc" : "service virtualization"
    },
    "data" : {
        "type" : "sv",
        "client" : "devtest",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo sv tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.793Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-changeimpactanalyzer",
    "name" : "Change Impact Analyzer",
    "type" : "test",
    "group" : "bots",
    "icon" : {
        "data" : "assets/icons/bchangeimpactor.png",
        "name" : "ChangeImpactAnalyzer",
        "type" : "image",
        "desc" : "Change Impact Analyzer"
    },
    "data" : {
        "type" : "ChangeImpactAnalyzer",
        "client" : "ChangeImpactAnalyzer",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo Change Impact Analyzer"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.793Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-defectpredictor",
    "name" : "Defect Predictor",
    "type" : "test",
    "group" : "bots",
    "icon" : {
        "data" : "assets/icons/bdefectpredictor.png",
        "name" : "DefectPredictor",
        "type" : "image",
        "desc" : "Defect Predictor"
    },
    "data" : {
        "type" : "DefectPredictor",
        "client" : "DefectPredictor",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo Defect Predictor"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.794Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-node-protractor-regression",
    "name" : "protractor-regression",
    "type" : "test",
    "group" : "custom",
    "icon" : {
        "data" : "assets/icons/protractor.png",
        "name" : "protractor",
        "type" : "image",
        "desc" : "protractor test"
    },
    "data" : {
        "type" : "e2e",
        "client" : "node-protractor",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "chmod 777 ./ci/scripts/functional-test.sh", 
                        "./ci/scripts/functional-test.sh"
                    ],
                    "windows" : null,
                    "linux" : null
                }
            }, 
            {
                "type" : "junit",
                "data" : {
                    "testResults" : "tests/*.xml",
                    "healthScaleFactor" : 1.1,
                    "allowEmptyResults" : false,
                    "keepLongStdio" : false
                }
            }, 
            {
                "type" : "slack",
                "data" : {
                    "type" : "SUCCESS",
                    "message" : "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >' - Regression Test Completed (<${env.BUILD_URL}${\"testReport/\"}|TestReports>) (<https://app.saucelabs.com/dashboard/tests|SauceLabs Video>)"
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.795Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-mvn-nunit",
    "name" : "nunit",
    "type" : "test",
    "group" : "unittest",
    "icon" : {
        "data" : "assets/icons/nunit.png",
        "name" : "nunit",
        "type" : "image",
        "desc" : "nunit test"
    },
    "data" : {
        "type" : "unit",
        "client" : "mvn-nunit",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "mvn clean test"
                    ],
                    "windows" : null,
                    "linux" : null
                }
            }, 
            {
                "type" : "nunit",
                "data" : {
                    "testResults" : "target/surefire-reports/*.xml",
                    "healthScaleFactor" : 1,
                    "allowEmptyResults" : false,
                    "keepLongStdio" : false
                }
            }, 
            {
                "type" : "slack",
                "data" : {
                    "type" : "SUCCESS",
                    "message" : "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >' - Unit Test Completed"
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.796Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-cits",
    "name" : "cits",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/cits.png",
        "name" : "cits",
        "type" : "image",
        "desc" : "cits test"
    },
    "data" : {
        "type" : "ui",
        "client" : "cits",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo cits test"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.797Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-craft",
    "name" : "craft",
    "type" : "test",
    "group" : "functional",
    "icon" : {
        "data" : "assets/icons/craft.png",
        "name" : "cits",
        "type" : "image",
        "desc" : "craft test"
    },
    "data" : {
        "type" : "ui",
        "client" : "craft",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo craft test"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.798Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-smartstub",
    "name" : "smartstub",
    "type" : "test",
    "group" : "other-services",
    "icon" : {
        "data" : "assets/icons/smartstub.png",
        "name" : "smartstub",
        "type" : "image",
        "desc" : "smartstub service virtualization"
    },
    "data" : {
        "type" : "sv",
        "client" : "smartstub",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo smartstub tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.799Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-bluelink",
    "name" : "Bluelink",
    "type" : "test",
    "group" : "other-services",
    "icon" : {
        "data" : "assets/icons/iotbluelink.png",
        "name" : "bluelink",
        "type" : "image",
        "desc" : "bluelink service virtualization"
    },
    "data" : {
        "type" : "sv",
        "client" : "bluelink",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo bluelink tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.799Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}

,
{
    "_id" : "test-onetdm",
    "name" : "OneTDM",
    "type" : "test",
    "group" : "other-services",
    "icon" : {
        "data" : "assets/icons/onetdm.png",
        "name" : "onetdm",
        "type" : "image",
        "desc" : "Test Data Management"
    },
    "data" : {
        "type" : "sv",
        "client" : "bluelink",
        "steps" : [ 
            {
                "type" : "script",
                "data" : {
                    "script" : [ 
                        "echo onetdm tests"
                    ]
                }
            }
        ]
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.754Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.800Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolTest"
}
]
);
db.toolStageSteps.insert([
{
    "_id" : "Build Job",
    "group" : [ 
        {
            "_id" : "build-job",
            "name" : "Build Job",
            "type" : "build-job",
            "data" : {
                "wait" : true,
                "name" : ""
            },
            "params" : [ 
                {
                    "name" : "name",
                    "type" : "text",
                    "label" : "Job Name",
                    "optional" : false
                }, 
                {
                    "name" : "wait",
                    "type" : "boolean",
                    "label" : "Wait for Completion",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.954Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Shell Script",
    "group" : [ 
        {
            "_id" : "sh",
            "type" : "sh",
            "data" : {
                "script" : [ 
                    "echo hello!"
                ]
            },
            "params" : [ 
                {
                    "name" : "script",
                    "type" : "multilineText",
                    "label" : "Script",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.958Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Batch Script",
    "group" : [ 
        {
            "_id" : "bat",
            "type" : "bat",
            "data" : {
                "script" : [ 
                    "echo hello!"
                ]
            },
            "params" : [ 
                {
                    "name" : "script",
                    "type" : "multilineText",
                    "label" : "Script",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.959Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Script",
    "group" : [ 
        {
            "_id" : "script",
            "type" : "script",
            "data" : {
                "script" : [ 
                    "echo platform-aware!"
                ]
            },
            "params" : [ 
                {
                    "name" : "script",
                    "type" : "multilineText",
                    "label" : "Script",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.961Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Print Message",
    "group" : [ 
        {
            "_id" : "print",
            "type" : "print",
            "data" : {
                "message" : ""
            },
            "params" : [ 
                {
                    "name" : "message",
                    "type" : "text",
                    "label" : "Message",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.963Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Sleep",
    "group" : [ 
        {
            "_id" : "sleep",
            "type" : "sleep",
            "data" : {
                "time" : 0,
                "unit" : "SECONDS"
            },
            "params" : [ 
                {
                    "name" : "time",
                    "type" : "text",
                    "label" : "Sleep Time",
                    "optional" : false
                }, 
                {
                    "name" : "unit",
                    "type" : "select",
                    "label" : "Time Unit",
                    "optional" : false,
                    "data" : [ 
                        "NANOSECONDS", 
                        "MICROSECONDS", 
                        "MILLISECONDS", 
                        "SECONDS", 
                        "MINUTES", 
                        "HOURS", 
                        "DAYS"
                    ]
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.964Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Archive Junit Results",
    "group" : [ 
        {
            "_id" : "junit",
            "name" : "junit",
            "type" : "junit",
            "data" : {
                "testResults" : "target/test-reports/*.xml",
                "healthScaleFactor" : 1.1,
                "allowEmptyResults" : false
            },
            "params" : [ 
                {
                    "name" : "testResults",
                    "type" : "text",
                    "label" : "Report Fileset",
                    "optional" : false
                }, 
                {
                    "name" : "healthScaleFactor",
                    "type" : "text",
                    "label" : "Health Scale factor",
                    "optional" : false
                }, 
                {
                    "name" : "allowEmptyResults",
                    "type" : "boolean",
                    "label" : "Allow empty results",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.966Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Slack Notifiaction Message",
    "group" : [ 
        {
            "_id" : "slack",
            "name" : "slack",
            "type" : "slack",
            "data" : {
                "type" : "INFO",
                "message" : "Job #${env.BUILD_NUMBER} '<${env.BUILD_URL}|${env.JOB_NAME} >'"
            },
            "params" : [ 
                {
                    "name" : "type",
                    "type" : "select",
                    "label" : "Type",
                    "optional" : false,
                    "data" : [ 
                        "INFO", 
                        "WARN", 
                        "FAILURE", 
                        "SUCCESS"
                    ]
                }, 
                {
                    "name" : "message",
                    "type" : "text",
                    "label" : "Message",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.967Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Publish HTML",
    "group" : [ 
        {
            "_id" : "publishHTML",
            "name" : "publishHTML",
            "type" : "publishHTML",
            "data" : {
                "reportDir" : "coverage",
                "reportFiles" : "index.html",
                "reportName" : "RCov Report"
            },
            "params" : [ 
                {
                    "name" : "reportDir",
                    "type" : "text",
                    "label" : "Report Directory",
                    "optional" : false
                }, 
                {
                    "name" : "reportFiles",
                    "type" : "text",
                    "label" : "Report Files",
                    "optional" : false
                }, 
                {
                    "name" : "reportName",
                    "type" : "text",
                    "label" : "Report Name",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.969Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}
,
{
    "_id" : "Sonar Qube",
    "group" : [ 
        {
            "_id" : "sonar",
            "name" : "Sonar Maven",
            "type" : "sonar",
            "data" : {
                "script" : [ 
                    "mvn clean install $SONAR_MAVEN_GOAL cobertura:cobertura -Dcobertura.report.format=xml  -Dsonar.cobertura.reportPath=target/site/cobertura/coverage.xml -Dsonar.zaproxy.reportPath=$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_NUMBER/zap/zap-raw.xml"
                ],
                "env" : "SonarQube"
            },
            "params" : [ 
                {
                    "name" : "env",
                    "type" : "text",
                    "label" : "Sonar Env",
                    "optional" : false
                }, 
                {
                    "name" : "script",
                    "type" : "multilineText",
                    "label" : "Script",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.969Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Owasp Zap",
    "group" : [ 
        {
            "_id" : "owasp-zap",
            "name" : "Owasp Zap Security Scan",
            "type" : "owasp-zap",
            "data" : {
                "zapHost" : "localhost",
                "zapPort" : "8095",
                "zapHome" : "$JENKINS_HOME/zap",
                "timeout" : "100",
                "allowedHosts" : [],
                "sessionPath" : "",
                "targetHost" : "http://localhost:4200",
                "scanPolicyName" : "active",
                "userId" : "1",
                "failAllAlerts" : "1",
                "failHighAlerts" : "0",
                "failMediumAlerts" : "0",
                "failLowAlerts" : "0",
                "falsePositivesFilePath" : "zapFalsePositives.json"
            },
            "params" : [ 
                {
                    "name" : "zapHost",
                    "type" : "text",
                    "label" : "Zap Host",
                    "optional" : false
                }, 
                {
                    "name" : "zapPort",
                    "type" : "text",
                    "label" : "Zap Port",
                    "optional" : false
                }, 
                {
                    "name" : "zapHome",
                    "type" : "text",
                    "label" : "Zap Home",
                    "optional" : false
                }, 
                {
                    "name" : "timeout",
                    "type" : "text",
                    "label" : "Timeout",
                    "optional" : false
                }, 
                {
                    "name" : "allowedHosts",
                    "type" : "multilineText",
                    "label" : "Allowed Hosts",
                    "optional" : false
                }, 
                {
                    "name" : "sessionPath",
                    "type" : "text",
                    "label" : "Session Path",
                    "optional" : false
                }, 
                {
                    "name" : "targetHost",
                    "type" : "text",
                    "label" : "Target Host",
                    "optional" : false
                }, 
                {
                    "name" : "scanPolicyName",
                    "type" : "text",
                    "label" : "Scan Policy Name",
                    "optional" : false
                }, 
                {
                    "name" : "userId",
                    "type" : "text",
                    "label" : "UserId",
                    "optional" : false
                }, 
                {
                    "name" : "failAllAlerts",
                    "type" : "text",
                    "label" : "All Alerts",
                    "optional" : false
                }, 
                {
                    "name" : "failHighAlerts",
                    "type" : "text",
                    "label" : "High Alerts",
                    "optional" : false
                }, 
                {
                    "name" : "failMediumAlerts",
                    "type" : "text",
                    "label" : "Medium Alerts",
                    "optional" : false
                }, 
                {
                    "name" : "failLowAlerts",
                    "type" : "text",
                    "label" : "Low Alerts",
                    "optional" : false
                }, 
                {
                    "name" : "falsePositivesFilePath",
                    "type" : "text",
                    "label" : "False Positives File",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.970Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Sonar - Cobertura",
    "group" : [ 
        {
            "_id" : "sonar-cobertura",
            "name" : "Sonar Cobertura Maven",
            "type" : "sonar-cobertura",
            "data" : {
                "script" : [ 
                    "mvn clean install $SONAR_MAVEN_GOAL cobertura:cobertura -Dcobertura.report.format=xml  -Dsonar.cobertura.reportPath=target/site/cobertura/coverage.xml -Dsonar.zaproxy.reportPath=$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_NUMBER/zap/zap-raw.xml"
                ],
                "env" : "SonarQube"
            },
            "params" : [ 
                {
                    "name" : "env",
                    "type" : "text",
                    "label" : "Sonar Env",
                    "optional" : false
                }, 
                {
                    "name" : "script",
                    "type" : "multilineText",
                    "label" : "Script",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.971Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Sonar - Zap Report",
    "group" : [ 
        {
            "_id" : "sonar-zap-report",
            "name" : "Sonar Zap Maven",
            "type" : "sonar-zap-report",
            "data" : {
                "env" : "SonarQube",
                "script" : [ 
                    "mvn clean compile $SONAR_MAVEN_GOAL -Dsonar.zaproxy.reportPath=$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_NUMBER/zap/zap-raw.xml"
                ]
            },
            "params" : [ 
                {
                    "name" : "env",
                    "type" : "text",
                    "label" : "Sonar Env",
                    "optional" : false
                }, 
                {
                    "name" : "script",
                    "type" : "multilineText",
                    "label" : "Script",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.971Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Cobertura Report",
    "group" : [ 
        {
            "_id" : "jenkins-cobertura",
            "name" : "Cobertura Report",
            "type" : "jenkins-cobertura",
            "data" : {
                "coberturaReportFile" : "target/site/cobertura/coverage.xml"
            },
            "params" : [ 
                {
                    "name" : "coberturaReportFile",
                    "type" : "text",
                    "label" : "Report File",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.972Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Quality Gate",
    "group" : [ 
        {
            "_id" : "qualityGate",
            "type" : "qualityGate",
            "data" : {
                "resultFileName" : "results.properties",
                "qualityThresholdVariable" : "QUALITY_THRESHOLD",
                "passPercentageVariable" : "PASSED_PERCENTAGE"
            },
            "params" : [ 
                {
                    "name" : "resultFileName",
                    "type" : "text",
                    "label" : "Results File Name",
                    "optional" : false
                }, 
                {
                    "name" : "qualityThresholdVariable",
                    "type" : "text",
                    "label" : "Quality Threshold Variable",
                    "optional" : false
                }, 
                {
                    "name" : "passPercentageVariable",
                    "type" : "text",
                    "label" : "Pass Percentage Variable",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.973Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Groovy Script",
    "group" : [ 
        {
            "_id" : "groovy-script",
            "type" : "groovy-script",
            "data" : {
                "script" : [ 
                    "println hello!"
                ]
            },
            "params" : [ 
                {
                    "name" : "script",
                    "type" : "multilineText",
                    "label" : "Script",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.975Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Office 365 Connector",
    "group" : [ 
        {
            "_id" : "msTeam",
            "type" : "msTeam",
            "data" : {
                "color" : "#0000ff",
                "message" : "${env.JOB_NAME} ${env.BUILD_NUMBER}",
                "status" : "Started",
                "webHookUrl" : "${env.TEAMS_WEBHOOK}"
            },
            "params" : [ 
                {
                    "name" : "webHookUrl",
                    "type" : "text",
                    "label" : "WebHookUrl",
                    "optional" : false
                }, 
                {
                    "name" : "message",
                    "type" : "text",
                    "label" : "Message",
                    "optional" : false
                }, 
                {
                    "name" : "status",
                    "type" : "text",
                    "label" : "Status",
                    "optional" : false
                }, 
                {
                    "name" : "color",
                    "type" : "text",
                    "label" : "Color",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.977Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}

,
{
    "_id" : "Performance Test Result",
    "group" : [ 
        {
            "_id" : "performance-test-report",
            "type" : "performance-test-report",
            "data" : {
                "sourceDataFiles" : "**/*.jtl",
                "filterRegex" : "",
                "modeEvaluation" : "Standard Mode",
                "modeOfThreshold" : "Relative Threshold",
                "errorFailedThreshold" : -1,
                "errorUnstableThreshold" : -1,
                "errorUnstableResponseTimeThreshold" : [ 
                    "test", 
                    "set", 
                    "east"
                ],
                "relativeUnstableThresholdNegative" : -1.0,
                "relativeUnstableThresholdPositive" : -1.0,
                "relativeFailedThresholdNegative" : -1.0,
                "relativeFailedThresholdPositive" : -1.0,
                "configType" : "Average Response Time",
                "graphType" : "Average Response Time",
                "percentiles" : "0,50,90,100",
                "failBuildIfNoResultFile" : true
            },
            "params" : [ 
                {
                    "name" : "sourceDataFiles",
                    "type" : "text",
                    "label" : "Source data files",
                    "optional" : false
                }, 
                {
                    "name" : "filterRegex",
                    "type" : "text",
                    "label" : "Regex for included samplers",
                    "optional" : false
                }, 
                {
                    "name" : "modeEvaluation",
                    "type" : "select",
                    "label" : "Select evaluation mode",
                    "optional" : false,
                    "data" : [ 
                        "Standard Mode", 
                        "Expert Mode"
                    ]
                }, 
                {
                    "name" : "modeOfThreshold",
                    "type" : "select",
                    "label" : "Select mode",
                    "optional" : false,
                    "data" : [ 
                        "Relative Threshold", 
                        "Error Threshold"
                    ]
                }, 
                {
                    "name" : "errorUnstableThreshold",
                    "type" : "text",
                    "label" : "Error Unstable Threshold",
                    "optional" : false
                }, 
                {
                    "name" : "errorFailedThreshold",
                    "type" : "text",
                    "label" : "Error Failed Threshold",
                    "optional" : false
                }, 
                {
                    "name" : "relativeUnstableThresholdNegative",
                    "type" : "text",
                    "label" : "Relative Unstable Threshold (-)",
                    "optional" : false
                }, 
                {
                    "name" : "relativeUnstableThresholdPositive",
                    "type" : "text",
                    "label" : "Relative Unstable Threshold (+)",
                    "optional" : false
                }, 
                {
                    "name" : "relativeFailedThresholdNegative",
                    "type" : "text",
                    "label" : "Relative Failed Threshold (-)",
                    "optional" : false
                }, 
                {
                    "name" : "relativeFailedThresholdPositive",
                    "type" : "text",
                    "label" : "Relative Failed Threshold (+)",
                    "optional" : false
                }, 
                {
                    "name" : "compareBuildPrevious",
                    "type" : "boolean",
                    "label" : "Compare with previous Build",
                    "optional" : false
                }, 
                {
                    "name" : "nthBuildNumber",
                    "type" : "text",
                    "label" : "Compare with Build number",
                    "optional" : false
                }, 
                {
                    "name" : "configType",
                    "type" : "select",
                    "label" : "Compare based on",
                    "optional" : false,
                    "data" : [ 
                        "Average Response Time", 
                        "Median Response Time", 
                        "Percentile Response Time"
                    ]
                }, 
                {
                    "name" : "ignoreFailedBuilds",
                    "type" : "boolean",
                    "label" : "Ignore Failed Builds",
                    "optional" : false
                }, 
                {
                    "name" : "ignoreUnstableBuilds",
                    "type" : "boolean",
                    "label" : "Ignore Unstable Builds",
                    "optional" : false
                }, 
                {
                    "name" : "persistConstraintLog",
                    "type" : "boolean",
                    "label" : "Save constraint log to workspace",
                    "optional" : false
                }, 
                {
                    "name" : "junitOutput",
                    "type" : "text",
                    "label" : "JUnit output file",
                    "optional" : false
                }, 
                {
                    "name" : "graphType",
                    "type" : "select",
                    "label" : "Select graphed metric",
                    "optional" : false,
                    "data" : [ 
                        "Average Response Time", 
                        "Median Response Time", 
                        "Percentile Response Time"
                    ]
                }, 
                {
                    "name" : "percentiles",
                    "type" : "text",
                    "label" : "Select display percentiles",
                    "optional" : false
                }, 
                {
                    "name" : "modePerformancePerTestCase",
                    "type" : "boolean",
                    "label" : "Display Performance Report Per Test Case",
                    "optional" : false
                }, 
                {
                    "name" : "modeThroughput",
                    "type" : "boolean",
                    "label" : "Display Performance Report with Throughput",
                    "optional" : false
                }, 
                {
                    "name" : "excludeResponseTime",
                    "type" : "boolean",
                    "label" : "Exclude response time of errored samples",
                    "optional" : false
                }, 
                {
                    "name" : "failBuildIfNoResultFile",
                    "type" : "boolean",
                    "label" : "Fail build when result files are not present",
                    "optional" : false
                }, 
                {
                    "name" : "baselineBuild",
                    "type" : "text",
                    "label" : "Baseline build number",
                    "optional" : false
                }
            ]
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.948Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.978Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolStageStep"
}
]
);
db.toolProjectConfigs.insert([
{
    "_id" : "Environment",
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.180Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.185Z"),
    "allowed" : "config, test, source",
    "group" : [ 
        {
            "_id" : "environments",
            "type" : "plugin",
            "data" : {
                "key" : "",
                "value" : {
                    "type" : "string",
                    "value" : ""
                }
            },
            "params" : [ 
                {
                    "name" : "key",
                    "type" : "text",
                    "label" : "Key",
                    "optional" : false
                }, 
                {
                    "name" : "value",
                    "type" : "secretText",
                    "label" : "Value",
                    "optional" : false
                }
            ],
            "additionalProperties" : {}
        }
    ],
    "additionalProperties" : {},
    "_class" : "com.cognizant.leap.tools.beans.ToolProjectConfig"
}

,
{
    "_id" : "Options",
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.180Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.189Z"),
    "allowed" : "config",
    "group" : [ 
        {
            "_id" : "options",
            "type" : "plugin",
            "params" : [ 
                {
                    "name" : "options",
                    "type" : "selectObject",
                    "label" : "Options",
                    "optional" : true,
                    "data" : [ 
                        {
                            "name" : "checkoutToSubdirectory",
                            "data" : [ 
                                {
                                    "name" : "checkoutToSubdirectory",
                                    "type" : "text",
                                    "label" : "File path in workspace"
                                }
                            ]
                        }, 
                        {
                            "name" : "disableConcurrentBuilds",
                            "data" : [ 
                                {
                                    "name" : "disableConcurrentBuilds",
                                    "type" : "inputLabel",
                                    "label" : "Do not allow concurrent builds",
                                    "optional" : false,
                                    "value" : "Do not allow concurrent builds"
                                }
                            ]
                        }, 
                        {
                            "name" : "disableResume",
                            "data" : [ 
                                {
                                    "name" : "disableResume",
                                    "type" : "inputLabel",
                                    "label" : "Do not allow the pipeline to resume if the master restarts",
                                    "optional" : false,
                                    "value" : "Do not allow the pipeline to resume if the master restarts"
                                }
                            ]
                        }, 
                        {
                            "name" : "newContainerPerStage",
                            "data" : [ 
                                {
                                    "name" : "newContainerPerStage",
                                    "type" : "inputLabel",
                                    "label" : "Allows new container instance on same node",
                                    "optional" : false,
                                    "value" : "Allows new container instance on same node"
                                }
                            ]
                        }, 
                        {
                            "name" : "overrideIndexTriggers",
                            "data" : [ 
                                {
                                    "name" : "overrideIndexTriggers",
                                    "type" : "boolean",
                                    "label" : "Allows overriding default treatment of branch indexing triggers",
                                    "optional" : false,
                                    "value" : false
                                }
                            ]
                        }, 
                        {
                            "name" : "preserveStashes",
                            "data" : [ 
                                {
                                    "name" : "preserveStashes",
                                    "type" : "text",
                                    "label" : "Most recent builds' stashes"
                                }
                            ]
                        }, 
                        {
                            "name" : "quietPeriod",
                            "data" : [ 
                                {
                                    "name" : "quietPeriod",
                                    "type" : "text",
                                    "label" : "Quiet Period"
                                }
                            ]
                        }, 
                        {
                            "name" : "retry",
                            "data" : [ 
                                {
                                    "name" : "retry",
                                    "type" : "text",
                                    "label" : "Retry Count"
                                }
                            ]
                        }, 
                        {
                            "name" : "skipDefaultCheckout",
                            "data" : [ 
                                {
                                    "name" : "skipDefaultCheckout",
                                    "type" : "inputLabel",
                                    "label" : "Skip default checkout",
                                    "optional" : false,
                                    "value" : "Skip default checkout"
                                }
                            ]
                        }, 
                        {
                            "name" : "skipStagesAfterUnstable",
                            "data" : [ 
                                {
                                    "name" : "skipStagesAfterUnstable",
                                    "type" : "inputLabel",
                                    "label" : "Skip stages once the build is unstable",
                                    "optional" : false,
                                    "value" : "Skip stages once the build is unstable"
                                }
                            ]
                        }, 
                        {
                            "name" : "timestamps",
                            "data" : [ 
                                {
                                    "name" : "timestamps",
                                    "type" : "text",
                                    "label" : "Timestamp"
                                }
                            ]
                        }, 
                        {
                            "name" : "timeout",
                            "data" : [ 
                                {
                                    "name" : "time",
                                    "type" : "text",
                                    "label" : "Timeout"
                                }, 
                                {
                                    "name" : "unit",
                                    "type" : "text",
                                    "label" : "Unit"
                                }, 
                                {
                                    "name" : "activity",
                                    "type" : "boolean",
                                    "label" : "Timeout after inactivity",
                                    "optional" : false,
                                    "value" : false
                                }
                            ]
                        }, 
                        {
                            "name" : "buildDiscarder",
                            "data" : [ 
                                {
                                    "name" : "daysToKeepStr",
                                    "type" : "text",
                                    "label" : "Days to keep Builds"
                                }, 
                                {
                                    "name" : "numToKeepStr",
                                    "type" : "text",
                                    "label" : "Max # of builds to keep"
                                }
                            ]
                        }
                    ]
                }
            ],
            "additionalProperties" : {}
        }
    ],
    "additionalProperties" : {},
    "_class" : "com.cognizant.leap.tools.beans.ToolProjectConfig"
}

,
{
    "_id" : "Parameters",
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.180Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.190Z"),
    "allowed" : "config",
    "group" : [ 
        {
            "_id" : "parameters",
            "type" : "plugin",
            "params" : [ 
                {
                    "name" : "paramType",
                    "type" : "selectObject",
                    "label" : "Parameters",
                    "optional" : true,
                    "data" : [ 
                        {
                            "name" : "string",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "String Param Name"
                                }, 
                                {
                                    "name" : "defaultValue",
                                    "type" : "text",
                                    "label" : "Default Value"
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }, 
                        {
                            "name" : "text",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Text Param Name"
                                }, 
                                {
                                    "name" : "defaultValue",
                                    "type" : "text",
                                    "label" : "Default Value"
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }, 
                        {
                            "name" : "booleanParam",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Boolean Param Name"
                                }, 
                                {
                                    "name" : "defaultValue",
                                    "type" : "select",
                                    "label" : "Default Value",
                                    "optional" : false,
                                    "data" : [ 
                                        "True", 
                                        "False"
                                    ]
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }, 
                        {
                            "name" : "choice",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Choice Param Name"
                                }, 
                                {
                                    "name" : "choices",
                                    "type" : "multilineText",
                                    "label" : "Choices"
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }, 
                        {
                            "name" : "password",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Password Param Name"
                                }, 
                                {
                                    "name" : "defaultValue",
                                    "type" : "text",
                                    "label" : "Default Value"
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }
                    ]
                }
            ],
            "additionalProperties" : {}
        }
    ],
    "additionalProperties" : {},
    "_class" : "com.cognizant.leap.tools.beans.ToolProjectConfig"
}

,
{
    "_id" : "Triggers",
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.180Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.191Z"),
    "allowed" : "config",
    "group" : [ 
        {
            "_id" : "triggers",
            "type" : "plugin",
            "params" : [ 
                {
                    "name" : "triggers",
                    "type" : "selectObject",
                    "label" : "Triggers",
                    "optional" : true,
                    "data" : [ 
                        {
                            "name" : "cron",
                            "data" : [ 
                                {
                                    "name" : "schedule",
                                    "type" : "multilineText",
                                    "label" : "Cron Schedule"
                                }
                            ]
                        }, 
                        {
                            "name" : "pollSCM",
                            "data" : [ 
                                {
                                    "name" : "schedule",
                                    "type" : "multilineText",
                                    "label" : "PollSCM Schedule"
                                }
                            ]
                        }, 
                        {
                            "name" : "upstream",
                            "data" : [ 
                                {
                                    "name" : "upstreamProjects",
                                    "type" : "text",
                                    "label" : "Projects to watch"
                                }, 
                                {
                                    "name" : "threshold",
                                    "type" : "select",
                                    "label" : "Threshold",
                                    "optional" : false,
                                    "data" : [ 
                                        "Trigger only if build is stable", 
                                        "Trigger even if build is unstable", 
                                        "Trigger even if build fails"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            "additionalProperties" : {}
        }
    ],
    "additionalProperties" : {},
    "_class" : "com.cognizant.leap.tools.beans.ToolProjectConfig"
}

,
{
    "_id" : "Tools",
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.180Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.192Z"),
    "allowed" : "config, test, source",
    "group" : [ 
        {
            "_id" : "tools",
            "type" : "plugin",
            "params" : [ 
                {
                    "name" : "tools",
                    "type" : "selectObject",
                    "label" : "Tools",
                    "optional" : true,
                    "data" : [ 
                        {
                            "name" : "git",
                            "data" : [ 
                                {
                                    "name" : "version",
                                    "type" : "text",
                                    "label" : "Git Name"
                                }
                            ]
                        }, 
                        {
                            "name" : "maven",
                            "data" : [ 
                                {
                                    "name" : "version",
                                    "type" : "text",
                                    "label" : "Maven Name"
                                }
                            ]
                        }, 
                        {
                            "name" : "jdk",
                            "data" : [ 
                                {
                                    "name" : "version",
                                    "type" : "text",
                                    "label" : "JDK Name"
                                }
                            ]
                        }
                    ]
                }
            ],
            "additionalProperties" : {}
        }
    ],
    "additionalProperties" : {},
    "_class" : "com.cognizant.leap.tools.beans.ToolProjectConfig"
}

,
{
    "_id" : "Input",
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.180Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.193Z"),
    "allowed" : "test, source",
    "group" : [ 
        {
            "_id" : "input",
            "type" : "plugin",
            "data" : {
                "message" : "",
                "id" : "",
                "ok" : "",
                "submitter" : "",
                "submitterParameter" : "",
                "parameters" : [ 
                    {
                        "paramType" : "",
                        "name" : "",
                        "defaultValue" : "",
                        "description" : "",
                        "choices" : []
                    }
                ]
            },
            "params" : [ 
                {
                    "name" : "message",
                    "type" : "text",
                    "label" : "Message",
                    "optional" : false
                }, 
                {
                    "name" : "id",
                    "type" : "text",
                    "label" : "ID",
                    "optional" : false
                }, 
                {
                    "name" : "ok",
                    "type" : "text",
                    "label" : "OK",
                    "optional" : false
                }, 
                {
                    "name" : "submitter",
                    "type" : "text",
                    "label" : "Submitter",
                    "optional" : false
                }, 
                {
                    "name" : "submitterParameter",
                    "type" : "text",
                    "label" : "Submitter Parameter",
                    "optional" : false
                }, 
                {
                    "name" : "paramType",
                    "type" : "selectObject",
                    "label" : "Parameters",
                    "optional" : true,
                    "data" : [ 
                        {
                            "name" : "string",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "String Param Name"
                                }, 
                                {
                                    "name" : "defaultValue",
                                    "type" : "text",
                                    "label" : "Default Value"
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }, 
                        {
                            "name" : "text",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Text Param Name"
                                }, 
                                {
                                    "name" : "defaultValue",
                                    "type" : "text",
                                    "label" : "Default Value"
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }, 
                        {
                            "name" : "booleanParam",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Boolean Param Name"
                                }, 
                                {
                                    "name" : "defaultValue",
                                    "type" : "select",
                                    "label" : "Default Value",
                                    "optional" : false,
                                    "data" : [ 
                                        "True", 
                                        "False"
                                    ]
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }, 
                        {
                            "name" : "choice",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Choice Param Name"
                                }, 
                                {
                                    "name" : "choices",
                                    "type" : "multilineText",
                                    "label" : "Choices"
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }, 
                        {
                            "name" : "password",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Password Param Name"
                                }, 
                                {
                                    "name" : "defaultValue",
                                    "type" : "text",
                                    "label" : "Default Value"
                                }, 
                                {
                                    "name" : "description",
                                    "type" : "multilineText",
                                    "label" : "Description"
                                }
                            ]
                        }
                    ]
                }
            ],
            "additionalProperties" : {}
        }
    ],
    "additionalProperties" : {},
    "_class" : "com.cognizant.leap.tools.beans.ToolProjectConfig"
}

,
{
    "_id" : "When",
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.180Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.197Z"),
    "allowed" : "test, source",
    "group" : [ 
        {
            "_id" : "when",
            "type" : "plugin",
            "data" : {
                "type" : "",
                "beforeAgent" : false,
                "beforeInput" : false,
                "cases" : [ 
                    {
                        "type" : "",
                        "value" : {},
                        "caseValue" : ""
                    }
                ]
            },
            "params" : [ 
                {
                    "name" : "type",
                    "type" : "select",
                    "label" : "Type",
                    "optional" : false,
                    "data" : [ 
                        "all", 
                        "any", 
                        "not"
                    ]
                }, 
                {
                    "name" : "beforeAgent",
                    "type" : "boolean",
                    "label" : "Before Agent",
                    "optional" : false
                }, 
                {
                    "name" : "beforeInput",
                    "type" : "boolean",
                    "label" : "Before Input",
                    "optional" : false
                }, 
                {
                    "name" : "caseType",
                    "type" : "selectObject",
                    "label" : "Cases",
                    "optional" : true,
                    "data" : [ 
                        {
                            "name" : "branch",
                            "data" : [ 
                                {
                                    "name" : "value",
                                    "type" : "text",
                                    "label" : "Branch Name"
                                }
                            ]
                        }, 
                        {
                            "name" : "triggeredBy",
                            "data" : [ 
                                {
                                    "name" : "value",
                                    "type" : "text",
                                    "label" : "Trigger"
                                }
                            ]
                        }, 
                        {
                            "name" : "buildingTag",
                            "data" : [ 
                                {
                                    "name" : "value",
                                    "type" : "text",
                                    "label" : "Building Tag"
                                }
                            ]
                        }, 
                        {
                            "name" : "changelog",
                            "data" : [ 
                                {
                                    "name" : "value",
                                    "type" : "text",
                                    "label" : "Changelog"
                                }
                            ]
                        }, 
                        {
                            "name" : "expression",
                            "data" : [ 
                                {
                                    "name" : "value",
                                    "type" : "text",
                                    "label" : "Expression",
                                    "desc" : "Groovy Exp.(ex. params.DEBUG_BUILD)"
                                }
                            ]
                        }, 
                        {
                            "name" : "equals",
                            "data" : [ 
                                {
                                    "name" : "expected",
                                    "type" : "text",
                                    "label" : "Expected",
                                    "desc" : "Value"
                                }, 
                                {
                                    "name" : "actual",
                                    "type" : "text",
                                    "label" : "Actual",
                                    "desc" : "Variable Name(ex currentBuild.number)"
                                }
                            ]
                        }, 
                        {
                            "name" : "tag",
                            "data" : [ 
                                {
                                    "name" : "pattern",
                                    "type" : "text",
                                    "label" : "Matcher"
                                }, 
                                {
                                    "name" : "comparator",
                                    "type" : "select",
                                    "data" : [ 
                                        "EQUALS ", 
                                        "GLOB", 
                                        "REGEXP"
                                    ],
                                    "label" : "Matcher Type"
                                }
                            ]
                        }, 
                        {
                            "name" : "changeset",
                            "data" : [ 
                                {
                                    "name" : "glob",
                                    "type" : "text",
                                    "label" : "Matcher"
                                }, 
                                {
                                    "name" : "caseSensitive",
                                    "type" : "boolean",
                                    "label" : "Case Sensitive"
                                }
                            ]
                        }, 
                        {
                            "name" : "environment",
                            "data" : [ 
                                {
                                    "name" : "name",
                                    "type" : "text",
                                    "label" : "Name"
                                }, 
                                {
                                    "name" : "value",
                                    "type" : "text",
                                    "label" : "Value"
                                }, 
                                {
                                    "name" : "ignoreCase",
                                    "type" : "boolean",
                                    "label" : "Ignore Case"
                                }
                            ]
                        }
                    ]
                }
            ],
            "additionalProperties" : {}
        }
    ],
    "additionalProperties" : {},
    "_class" : "com.cognizant.leap.tools.beans.ToolProjectConfig"
}

,
{
    "_id" : "Stage Options",
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:34.180Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:34.198Z"),
    "allowed" : "source, test",
    "group" : [ 
        {
            "_id" : "stageOptions",
            "type" : "stageOptions",
            "params" : [ 
                {
                    "name" : "options",
                    "type" : "selectObject",
                    "label" : "Options",
                    "optional" : true,
                    "data" : [ 
                        {
                            "name" : "retry",
                            "data" : [ 
                                {
                                    "name" : "retry",
                                    "type" : "text",
                                    "label" : "Retry Count"
                                }
                            ]
                        }, 
                        {
                            "name" : "skipDefaultCheckout",
                            "data" : [ 
                                {
                                    "name" : "skipDefaultCheckout",
                                    "type" : "inputLabel",
                                    "label" : "Skip default checkout",
                                    "optional" : false,
                                    "value" : "Skip default checkout"
                                }
                            ]
                        }, 
                        {
                            "name" : "timestamps",
                            "data" : [ 
                                {
                                    "name" : "timestamps",
                                    "type" : "text",
                                    "label" : "Timestamp"
                                }
                            ]
                        }, 
                        {
                            "name" : "timeout",
                            "data" : [ 
                                {
                                    "name" : "time",
                                    "type" : "text",
                                    "label" : "Timeout"
                                }, 
                                {
                                    "name" : "unit",
                                    "type" : "text",
                                    "label" : "Unit"
                                }, 
                                {
                                    "name" : "activity",
                                    "type" : "boolean",
                                    "label" : "Timeout after inactivity",
                                    "optional" : false,
                                    "value" : false
                                }
                            ]
                        }
                    ]
                }
            ],
            "additionalProperties" : {}
        }
    ],
    "additionalProperties" : {},
    "_class" : "com.cognizant.leap.tools.beans.ToolProjectConfig"
}
]
);
db.toolDeployments.insert([
{
    "_id" : "aws",
    "group" : "default",
    "icon" : {
        "data" : "assets/icons/aws.png",
        "name" : "aws",
        "type" : "image",
        "desc" : "aws"
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.844Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.849Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolDeploy"
}

,
{
    "_id" : "gcp",
    "group" : "default",
    "icon" : {
        "data" : "assets/icons/gcp.png",
        "name" : "gcp",
        "type" : "image",
        "desc" : "Google Cloud"
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.844Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.851Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolDeploy"
}

,
{
    "_id" : "azure",
    "group" : "default",
    "icon" : {
        "data" : "assets/icons/azure.png",
        "name" : "MicrosoftAzure",
        "type" : "image",
        "desc" : "Microsoft Azure"
    },
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.844Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.852Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolDeploy"
}
]
);
db.toolAgents.insert([
{
    "_id" : "docker",
    "name" : "Docker",
    "type" : "agent",
    "agentType" : "docker",
    "group" : "default",
    "data" : {
        "image" : "maven:3-alpine",
        "args" : "-v $HOME/.m2:/root/.m2"
    },
    "icon" : {
        "data" : "assets/icons/docker.png",
        "name" : "docker",
        "type" : "image",
        "desc" : "Docker"
    },
    "params" : [ 
        {
            "name" : "image",
            "type" : "text",
            "label" : "Image",
            "optional" : false
        }, 
        {
            "name" : "args",
            "type" : "text",
            "label" : "Arguments",
            "optional" : true
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.893Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.900Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolAgent"
},
{
    "_id" : "kubernetes",
    "name" : "Kubernetes",
    "type" : "agent",
    "agentType" : "kubernetes",
    "group" : "default",
    "data" : {
        "image" : "maven:3-alpine"
    },
    "icon" : {
        "data" : "assets/icons/kube.png",
        "name" : "kubernetes",
        "type" : "image",
        "desc" : "Kubernetes"
    },
    "params" : [ 
        {
            "name" : "name",
            "type" : "text",
            "label" : "Name",
            "optional" : false
        }, 
        {
            "name" : "image",
            "type" : "text",
            "label" : "Image",
            "optional" : false
        }, 
        {
            "name" : "command",
            "type" : "text",
            "label" : "Command",
            "optional" : true
        }, 
        {
            "name" : "ttyEnabled",
            "type" : "boolean",
            "label" : "tty",
            "optional" : false
        }, 
        {
            "name" : "replicas",
            "type" : "text",
            "label" : "Replicas",
            "optional" : true
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.894Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.905Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolAgent"
}
]);
db.toolSources.insert([{
    "_id" : "src-git",
    "name" : "git",
    "type" : "source",
    "group" : "default",
    "data" : {
        "type" : "git",
        "repo" : "https://github.com/leap-cognizant/angularjs-springmvc-sample-boot.git",
        "branch" : "master"
    },
    "icon" : {
        "data" : "assets/icons/git.png",
        "name" : "git",
        "type" : "image",
        "desc" : "git"
    },
    "params" : [ 
        {
            "name" : "repo",
            "type" : "text",
            "label" : "URL",
            "optional" : false
        }, 
        {
            "name" : "branch",
            "type" : "text",
            "label" : "Branch",
            "optional" : true
        }, 
        {
            "name" : "subDirectory",
            "type" : "text",
            "label" : "Sub Directory",
            "optional" : true
        }, 
        {
            "name" : "credentialId",
            "type" : "secretText",
            "label" : "Cred ID",
            "optional" : true
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.566Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.619Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolSource"
},
{
    "_id" : "src-github",
    "name" : "github",
    "type" : "source",
    "group" : "default",
    "data" : {
        "type" : "github",
        "repo" : "https://github.com/leap-cognizant/angularjs-springmvc-sample-boot.git",
        "branch" : "master"
    },
    "icon" : {
        "data" : "assets/icons/github.png",
        "name" : "github",
        "type" : "image",
        "desc" : "git hub"
    },
    "params" : [ 
        {
            "name" : "repo",
            "type" : "text",
            "label" : "URL",
            "optional" : false
        }, 
        {
            "name" : "branch",
            "type" : "text",
            "label" : "Branch",
            "optional" : true
        }, 
        {
            "name" : "subDirectory",
            "type" : "text",
            "label" : "Sub Directory",
            "optional" : true
        }, 
        {
            "name" : "credentialId",
            "type" : "secretText",
            "label" : "Cred ID",
            "optional" : false
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.567Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.659Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolSource"
},
{
    "_id" : "src-gitlab",
    "name" : "gitlab",
    "type" : "source",
    "group" : "default",
    "data" : {
        "type" : "gitlab",
        "repo" : "https://github.com/leap-cognizant/angularjs-springmvc-sample-boot.git",
        "branch" : "master"
    },
    "icon" : {
        "data" : "assets/icons/gitlab.png",
        "name" : "gitlab",
        "type" : "image",
        "desc" : "git lab"
    },
    "params" : [ 
        {
            "name" : "repo",
            "type" : "text",
            "label" : "URL",
            "optional" : false
        }, 
        {
            "name" : "branch",
            "type" : "text",
            "label" : "Branch",
            "optional" : true
        }, 
        {
            "name" : "subDirectory",
            "type" : "text",
            "label" : "Sub Directory",
            "optional" : true
        }, 
        {
            "name" : "credentialId",
            "type" : "secretText",
            "label" : "Cred ID",
            "optional" : false
        }
    ],
    "createdUser" : "leap-api",
    "createdDate" : ISODate("2020-01-31T12:30:33.567Z"),
    "lastModifiedUser" : "",
    "lastModifiedDate" : ISODate("2020-01-31T12:30:33.662Z"),
    "_class" : "com.cognizant.leap.tools.beans.ToolSource"
}]
);