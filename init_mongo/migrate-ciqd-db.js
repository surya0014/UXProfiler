db.permissions.drop();
db.roles.drop();




db.permissions.insert([
	{
		"_id" : "leap.permission.admin",
		"group" : "adminstration",
		"name" : "Admin Permission"
	},
	{
		"_id" : "leap.team.create",
		"group" : "adminstration",
		"name" : "Create Team"
	},
	{
		"_id" : "leap.team.update",
		"group" : "adminstration",
		"name" : "Update Team"
	},
	{
		"_id" : "leap.team.delete",
		"group" : "adminstration",
		"name" : "Delete Team"
	},
	{
		"_id" : "leap.team.read",
		"group" : "adminstration",
		"name" : "Read Team"
	},
	{
		"_id" : "leap.user.create",
		"group" : "adminstration",
		"name" : "Create User"
	},
	{
		"_id" : "leap.user.update",
		"group" : "adminstration",
		"name" : "Update User"
	},
	{
		"_id" : "leap.user.delete",
		"group" : "adminstration",
		"name" : "Delete User"
	},
	{
		"_id" : "leap.user.read",
		"group" : "adminstration",
		"name" : "Read User"
	},
	{
		"_id" : "leap.user.token",
		"group" : "adminstration",
		"name" : "Generate User Token"
	},
	{
		"_id" : "leap.role.create",
		"group" : "adminstration",
		"name" : "Create Role"
	},
	{
		"_id" : "leap.role.update",
		"group" : "adminstration",
		"name" : "Update Role"
	},
	{
		"_id" : "leap.role.delete",
		"group" : "adminstration",
		"name" : "Delete Role"
	},
	{
		"_id" : "leap.role.read",
		"group" : "adminstration",
		"name" : "Read Role"
	},
	{
		"_id" : "leap.user.account.create",
		"group" : "adminstration",
		"name" : "Create Account"
	},
	{
		"_id" : "leap.user.account.update",
		"group" : "adminstration",
		"name" : "Update Account"
	},
	{
		"_id" : "leap.user.account.delete",
		"group" : "adminstration",
		"name" : "Delete Account"
	},
	{
		"_id" : "leap.user.account.read",
		"group" : "adminstration",
		"name" : "Read Account"
	},
	{
		"_id" : "leap.permission.read",
		"group" : "adminstration",
		"name" : "Read Permission"
	},
	{
		"_id" : "leap.password.update",
		"group" : "adminstration",
		"name" : "Update Password"
	},
	{
		"_id" : "leap.collector.token",
		"group" : "adminstration",
		"name" : "Generate Collector Token"
	},
	{
		"_id" : "leap.robot.token",
		"group" : "adminstration",
		"name" : "Generate Robot Token"
	},
	{
		"_id" : "leap.test-plugin.token",
		"group" : "adminstration",
		"name" : "Generate TestPlugin Token"
	},
	{
		"_id" : "project.read",
		"group" : "execution",
		"name" : "Read Project"
	},
	{
		"_id" : "project.update",
		"group" : "execution",
		"name" : "Update Project"
	},
	{
		"_id" : "project.create",
		"group" : "execution",
		"name" : "Create Project"
	},
	{
		"_id" : "project.delete",
		"group" : "execution",
		"name" : "Delete Project"
	},
	{
		"_id" : "execution.read",
		"group" : "execution",
		"name" : "Read Execution"
	},
	{
		"_id" : "execution.update",
		"group" : "execution",
		"name" : "Update Execution"
	},
	{
		"_id" : "execution.create",
		"group" : "execution",
		"name" : "Create Execution"
	},
	{
		"_id" : "execution.delete",
		"group" : "execution",
		"name" : "Delete Execution"
	},
	{
		"_id" : "execution.job.read",
		"group" : "execution",
		"name" : "Read Execution Job"
	},
	{
		"_id" : "execution.job.update",
		"group" : "execution",
		"name" : "Update Execution Job"
	},
	{
		"_id" : "execution.job.create",
		"group" : "execution",
		"name" : "Create Execution Job"
	},
	{
		"_id" : "execution.job.delete",
		"group" : "execution",
		"name" : "Delete Execution Job"
	},
	{
		"_id" : "execution.robot.read",
		"group" : "execution",
		"name" : "Read Execution Robot"
	},
	{
		"_id" : "execution.robot.update",
		"group" : "execution",
		"name" : "Update Execution Robot"
	},
	{
		"_id" : "execution.robot.create",
		"group" : "execution",
		"name" : "Create Execution Robot"
	},
	{
		"_id" : "execution.robot.delete",
		"group" : "execution",
		"name" : "Delete Execution Robot"
	},
	{
		"_id" : "execution.robot.download",
		"group" : "execution",
		"name" : "Download Execution Robot"
	},
	{
		"_id" : "execution.robot.force-complete",
		"group" : "execution",
		"name" : "Force Complete Test in Execution Robot"
	},
	{
		"_id" : "execution.robot.token",
		"group" : "execution",
		"name" : "Get Token for Execution Robot"
	},
	{
		"_id" : "aws.robot.read",
		"group" : "execution",
		"name" : "Read AWS Robot"
	},
	{
		"_id" : "aws.robot.update",
		"group" : "execution",
		"name" : "Update AWS Robot"
	},
	{
		"_id" : "aws.robot.create",
		"group" : "execution",
		"name" : "Create AWS Robot"
	},
	{
		"_id" : "aws.robot.delete",
		"group" : "execution",
		"name" : "Delete AWS Robot"
	},
	{
		"_id" : "aws.service.update",
		"group" : "execution",
		"name" : "Update AWS Robot Service"
	},
	{
		"_id" : "azure.robot.read",
		"group" : "execution",
		"name" : "Read Azure Robot"
	},
	{
		"_id" : "azure.robot.update",
		"group" : "execution",
		"name" : "Update Azure Robot"
	},
	{
		"_id" : "azure.robot.create",
		"group" : "execution",
		"name" : "Create Azure Robot"
	},
	{
		"_id" : "azure.robot.delete",
		"group" : "execution",
		"name" : "Delete Azure Robot"
	},
	{
		"_id" : "azure.service.update",
		"group" : "execution",
		"name" : "Update Azure Robot Service"
	},
	{
		"_id" : "execution.properties.read",
		"group" : "execution",
		"name" : "Read Execution Properties"
	},
	{
		"_id" : "execution.properties.update",
		"group" : "execution",
		"name" : "Update Execution Properties"
	},
	{
		"_id" : "execution.properties.create",
		"group" : "execution",
		"name" : "Create Execution Properties"
	},
	{
		"_id" : "execution.properties.delete",
		"group" : "execution",
		"name" : "Delete Execution Properties"
	},
	{
		"_id" : "execution.log.read",
		"group" : "execution",
		"name" : "Read Execution Log"
	},
	{
		"_id" : "execution.log.update",
		"group" : "execution",
		"name" : "Update Execution Log"
	},
	{
		"_id" : "execution.log.create",
		"group" : "execution",
		"name" : "Create Execution Log"
	},
	{
		"_id" : "execution.log.delete",
		"group" : "execution",
		"name" : "Delete Execution Log"
	},
	{
		"_id" : "test.plan.read",
		"group" : "execution",
		"name" : "Read Test Plan"
	},
	{
		"_id" : "test.plan.update",
		"group" : "execution",
		"name" : "Update Test Plan"
	},
	{
		"_id" : "test.plan.create",
		"group" : "execution",
		"name" : "Create Test Plan"
	},
	{
		"_id" : "test.plan.delete",
		"group" : "execution",
		"name" : "Delete Test Plan"
	},
	{
		"_id" : "test.suite.read",
		"group" : "execution",
		"name" : "Read Test Suite"
	},
	{
		"_id" : "test.suite.update",
		"group" : "execution",
		"name" : "Update Test Suite"
	},
	{
		"_id" : "test.suite.create",
		"group" : "execution",
		"name" : "Create Test Suite"
	},
	{
		"_id" : "test.suite.delete",
		"group" : "execution",
		"name" : "Delete Test Suite"
	},
	{
		"_id" : "test.suite.execute",
		"group" : "execution",
		"name" : "Execute Test Suite"
	},
	{
		"_id" : "test.suite.force-complete",
		"group" : "execution",
		"name" : "Force Complete Test Suite"
	},
	{
		"_id" : "execution.tool.read",
		"group" : "execution",
		"name" : "Read Execution Tool"
	},
	{
		"_id" : "execution.tool.update",
		"group" : "execution",
		"name" : "Update Execution Tool"
	},
	{
		"_id" : "execution.tool.create",
		"group" : "execution",
		"name" : "Create Execution Tool"
	},
	{
		"_id" : "execution.tool.delete",
		"group" : "execution",
		"name" : "Delete Execution Tool"
	},
	{
		"_id" : "whitelist.tool.read",
		"group" : "execution",
		"name" : "Read Whitelist Tool"
	},
	{
		"_id" : "whitelist.tool.update",
		"group" : "execution",
		"name" : "Update Whitelist Tool"
	},
	{
		"_id" : "whitelist.tool.create",
		"group" : "execution",
		"name" : "Create Whitelist Tool"
	},
	{
		"_id" : "whitelist.tool.delete",
		"group" : "execution",
		"name" : "Delete Whitelist Tool"
	},
	{
		"_id" : "alm.test.read",
		"group" : "execution",
		"name" : "Read ALM Test"
	},
	{
		"_id" : "robot.message.send",
		"group" : "execution",
		"name" : "Send Message to Robot"
	},
	{
		"_id" : "robot.message.receive",
		"group" : "execution",
		"name" : "Receive Message to Robot"
	},
	{
		"_id" : "report.read",
		"group" : "report",
		"name" : "Read Report"
	},
	{
		"_id" : "report.update",
		"group" : "report",
		"name" : "Update Report"
	},
	{
		"_id" : "report.create",
		"group" : "report",
		"name" : "Create Report"
	},
	{
		"_id" : "report.delete",
		"group" : "report",
		"name" : "Delete Report"
	},
	{
		"_id" : "report.force-complete",
		"group" : "report",
		"name" : "Force Complete Report"
	},
	{
		"_id" : "report.merge",
		"group" : "report",
		"name" : "Merge Report"
	},
	{
		"_id" : "report.failure-analysis.update",
		"group" : "report",
		"name" : "Update Failure Analysis in Report"
	},
	{
		"_id" : "failure-analysis.tags",
		"group" : "report",
		"name" : "Get Failure Analysis Tags"
	},
	{
		"_id" : "failure-analysis.prediction",
		"group" : "report",
		"name" : "Failure Analysis Prediction"
	},
	{
		"_id" : "failure-analysis.retrain",
		"group" : "report",
		"name" : "Failure Analysis Retrain"
	},
	{
		"_id" : "jenkins.job.create",
		"group" : "pipeline",
		"name" : "Create Job in Jenkins"
	},
	{
		"_id" : "jenkins.job.update",
		"group" : "pipeline",
		"name" : "Update Job in Jenkins"
	},
	{
		"_id" : "jenkins.job.build",
		"group" : "pipeline",
		"name" : "Build Job in Jenkins"
	},
	{
		"_id" : "jenkins.job.read",
		"group" : "pipeline",
		"name" : "Read Job from Jenkins"
	},
	{
		"_id" : "jenkins.test",
		"group" : "pipeline",
		"name" : "Test Jenkins"
	},
	{
		"_id" : "jenkins.env.read",
		"group" : "pipeline",
		"name" : "Read Jenkins Environment Variables"
	},
	{
		"_id" : "jenkins.env.update",
		"group" : "pipeline",
		"name" : "Update Jenkins Environment Variables"
	},
	{
		"_id" : "jenkins.env.delete",
		"group" : "pipeline",
		"name" : "Delete Jenkins Environment Variables"
	},
	{
		"_id" : "scm.file.push",
		"group" : "pipeline",
		"name" : "Push File to SCM (Git/GitHub/BitBucket)"
	},
	{
		"_id" : "scm.test.connection",
		"group" : "pipeline",
		"name" : "Test Connection of SCM (Git/GitHub/BitBucket)"
	},
	{
		"_id" : "scm.project.read",
		"group" : "pipeline",
		"name" : "Read Project from SCM (Git/GitHub/BitBucket)"
	},
	{
		"_id" : "pipeline.convert",
		"group" : "pipeline",
		"name" : "Convert Project to Pipeline"
	},
	{
		"_id" : "appstatus.read",
		"group" : "pipeline",
		"name" : "Read AppStatus"
	},
	{
		"_id" : "appstatus.update",
		"group" : "pipeline",
		"name" : "Update AppStatus"
	},
	{
		"_id" : "appstatus.delete",
		"group" : "pipeline",
		"name" : "Delete AppStatus"
	},
	{
		"_id" : "auto-suggest.read",
		"group" : "pipeline",
		"name" : "Read AutoSuggest"
	},
	{
		"_id" : "auto-suggest.update",
		"group" : "pipeline",
		"name" : "Update AutoSuggest"
	},
	{
		"_id" : "auto-suggest.create",
		"group" : "pipeline",
		"name" : "Create AutoSuggest"
	},
	{
		"_id" : "auto-suggest.delete",
		"group" : "pipeline",
		"name" : "Delete AutoSuggest"
	},
	{
		"_id" : "system.settings.read",
		"group" : "pipeline",
		"name" : "Read SystemSettings"
	},
	{
		"_id" : "system.settings.update",
		"group" : "pipeline",
		"name" : "Update SystemSettings"
	},
	{
		"_id" : "system.settings.create",
		"group" : "pipeline",
		"name" : "Create SystemSettings"
	},
	{
		"_id" : "chart.read",
		"group" : "pipeline",
		"name" : "Read Chart"
	},
	{
		"_id" : "chart.update",
		"group" : "pipeline",
		"name" : "Update Chart"
	},
	{
		"_id" : "chart.create",
		"group" : "pipeline",
		"name" : "Create Chart"
	},
	{
		"_id" : "chart.delete",
		"group" : "pipeline",
		"name" : "Delete Chart"
	},
	{
		"_id" : "tool.read",
		"group" : "pipeline",
		"name" : "Read Tool"
	},
	{
		"_id" : "tool.update",
		"group" : "pipeline",
		"name" : "Update Tool"
	},
	{
		"_id" : "tool.create",
		"group" : "pipeline",
		"name" : "Create Tool"
	},
	{
		"_id" : "tool.delete",
		"group" : "pipeline",
		"name" : "Delete Tool"
	},
	{
		"_id" : "selenium.docker-compose.generate",
		"group" : "pipeline",
		"name" : "Generate Selenium DockerCompose"
	},
	{
		"_id" : "selenium.docker.images",
		"group" : "pipeline",
		"name" : "Read Selenium Docker Image"
	},
	{
		"_id" : "user.setting.read",
		"group" : "pipeline",
		"name" : "Read UserSetting"
	},
	{
		"_id" : "user.setting.update",
		"group" : "pipeline",
		"name" : "Update UserSetting"
	},
	{
		"_id" : "user.setting.create",
		"group" : "pipeline",
		"name" : "Create UserSetting"
	},
	{
		"_id" : "user.setting.delete",
		"group" : "pipeline",
		"name" : "Delete UserSetting"
	},
	
	{
      "_id" : "ciqdashboard.create",
 	  "group" : "ciqdashboard",
      "name" : "Create Dashboard"
    },
    {
      "_id" : "ciqdashboard.update",
 	  "group" : "ciqdashboard",
      "name" : "Update Dashboard"
    },
    {
      "_id" : "ciqdashboard.delete",
 	  "group" : "ciqdashboard",
      "name" : "Delete Dashboard"
    },
    {
      "_id" : "ciqdashboard.view",
 	  "group" : "ciqdashboard",
      "name" : "View Dashboard"
    },

    {
      "_id" : "ciqdashboard.project.create",
 	  "group" : "ciqdashboard",
      "name" : "Create Dashboard Project"
    },
    {
      "_id" : "ciqdashboard.project.update",
 	  "group" : "ciqdashboard",
      "name" : "Update Dashboard Project"
    },
    {
      "_id" : "ciqdashboard.project.delete",
 	  "group" : "ciqdashboard",
      "name" : "Delete Dashboard Project"
    },
    {
      "_id" : "ciqdashboard.project.view",
 	  "group" : "ciqdashboard",
      "name" : "View Dashboard Project"
    },

    {
      "_id" : "ciqdashboard.external.data.update",
 	  "group" : "ciqdashboard",
      "name" : "Upload external data"
    },

    {
      "_id" : "ciqdashboard.datasource.create",
 	  "group" : "ciqdashboard",
      "name" : "Create Dashboard Datasource"
    },
    {
      "_id" : "ciqdashboard.datasource.update",
 	  "group" : "ciqdashboard",
      "name" : "Update Dashboard Datasource"
    },
    {
      "_id" : "ciqdashboard.datasource.delete",
 	  "group" : "ciqdashboard",
      "name" : "Delete Dashboard Datasource"
    },
    {
      "_id" : "ciqdashboard.datasource.view",
 	  "group" : "ciqdashboard",
      "name" : "View Dashboard Datasource"
    },

    {
      "_id" : "ciqdashboard.chart.create",
 	  "group" : "ciqdashboard",
      "name" : "Create Dashboard Chart"
    },
    {
      "_id" : "ciqdashboard.chart.update",
 	  "group" : "ciqdashboard",
      "name" : "Update Dashboard Chart"
    },
    {
      "_id" : "ciqdashboard.chart.delete",
 	  "group" : "ciqdashboard",
      "name" : "Delete Dashboard Chart"
    },
    {
      "_id" : "ciqdashboard.chart.view",
 	  "group" : "ciqdashboard",
      "name" : "View Dashboard Chart"
    },

    {
      "_id" : "ciqdashboard.page.create",
 	  "group" : "ciqdashboard",
      "name" : "Create Dashboard Page"
    },
    {
      "_id" : "ciqdashboard.page.update",
 	  "group" : "ciqdashboard",
      "name" : "Update Dashboard Page"
    },
    {
      "_id" : "ciqdashboard.page.delete",
 	  "group" : "ciqdashboard",
      "name" : "Delete Dashboard Page"
    },
    {
      "_id" : "ciqdashboard.page.view",
 	  "group" : "ciqdashboard",
      "name" : "View Dashboard Page"
    }
]);



db.roles.insert([
{
    "_id" : "ADMIN",
    "permissions" : [ 
        {
            "_id" : "leap.permission.admin",
            "name" : "Administration"
        }, 
        {
            "_id" : "leap.dashboard.main",
            "name" : "Dashboard"
        }
    ],
    "_class" : "com.cognizant.leap.users.beans.Role"
},
{
    "_id" : "project manager",
    "desc" : "complete project management",
    "permissions" : [ 
        {
            "_id" : "alm.test.read",
            "name" : "Read ALM Test",
            "group" : "execution"
        }, 
        {
            "_id" : "appstatus.delete",
            "name" : "Delete AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "appstatus.read",
            "name" : "Read AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "appstatus.update",
            "name" : "Update AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.create",
            "name" : "Create AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.delete",
            "name" : "Delete AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.read",
            "name" : "Read AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.update",
            "name" : "Update AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "aws.robot.create",
            "name" : "Create AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.robot.delete",
            "name" : "Delete AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.robot.read",
            "name" : "Read AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.robot.update",
            "name" : "Update AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.service.update",
            "name" : "Update AWS Robot Service",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.create",
            "name" : "Create Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.delete",
            "name" : "Delete Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.read",
            "name" : "Read Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.update",
            "name" : "Update Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.service.update",
            "name" : "Update Azure Robot Service",
            "group" : "execution"
        }, 
        {
            "_id" : "chart.create",
            "name" : "Create Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "chart.delete",
            "name" : "Delete Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "chart.read",
            "name" : "Read Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "chart.update",
            "name" : "Update Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "execution.create",
            "name" : "Create Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.delete",
            "name" : "Delete Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.create",
            "name" : "Create Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.delete",
            "name" : "Delete Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.read",
            "name" : "Read Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.update",
            "name" : "Update Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.create",
            "name" : "Create Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.delete",
            "name" : "Delete Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.read",
            "name" : "Read Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.update",
            "name" : "Update Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.create",
            "name" : "Create Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.delete",
            "name" : "Delete Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.read",
            "name" : "Read Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.update",
            "name" : "Update Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.read",
            "name" : "Read Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.create",
            "name" : "Create Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.delete",
            "name" : "Delete Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.download",
            "name" : "Download Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.force-complete",
            "name" : "Force Complete Test in Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.read",
            "name" : "Read Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.token",
            "name" : "Get Token for Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.update",
            "name" : "Update Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.create",
            "name" : "Create Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.delete",
            "name" : "Delete Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.read",
            "name" : "Read Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.update",
            "name" : "Update Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.update",
            "name" : "Update Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "failure-analysis.prediction",
            "name" : "Failure Analysis Prediction",
            "group" : "report"
        }, 
        {
            "_id" : "failure-analysis.retrain",
            "name" : "Failure Analysis Retrain",
            "group" : "report"
        }, 
        {
            "_id" : "failure-analysis.tags",
            "name" : "Get Failure Analysis Tags",
            "group" : "report"
        }, 
        {
            "_id" : "jenkins.env.delete",
            "name" : "Delete Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.env.read",
            "name" : "Read Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.env.update",
            "name" : "Update Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.build",
            "name" : "Build Job in Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.create",
            "name" : "Create Job in Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.read",
            "name" : "Read Job from Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.update",
            "name" : "Update Job in Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.test",
            "name" : "Test Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "leap.password.update",
            "name" : "Update Password",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.permission.read",
            "name" : "Read Permission",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.robot.token",
            "name" : "Generate Robot Token",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.role.read",
            "name" : "Read Role",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.team.read",
            "name" : "Read Team",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.user.account.read",
            "name" : "Read Account",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.user.read",
            "name" : "Read User",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.user.token",
            "name" : "Generate User Token",
            "group" : "adminstration"
        }, 
        {
            "_id" : "pipeline.convert",
            "name" : "Convert Project to Pipeline",
            "group" : "pipeline"
        }, 
        {
            "_id" : "project.create",
            "name" : "Create Project",
            "group" : "execution"
        }, 
        {
            "_id" : "project.delete",
            "name" : "Delete Project",
            "group" : "execution"
        }, 
        {
            "_id" : "project.read",
            "name" : "Read Project",
            "group" : "execution"
        }, 
        {
            "_id" : "project.update",
            "name" : "Update Project",
            "group" : "execution"
        }, 
        {
            "_id" : "report.create",
            "name" : "Create Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.delete",
            "name" : "Delete Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.failure-analysis.update",
            "name" : "Update Failure Analysis in Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.force-complete",
            "name" : "Force Complete Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.merge",
            "name" : "Merge Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.read",
            "name" : "Read Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.update",
            "name" : "Update Report",
            "group" : "report"
        }, 
        {
            "_id" : "robot.message.receive",
            "name" : "Receive Message to Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "robot.message.send",
            "name" : "Send Message to Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "scm.file.push",
            "name" : "Push File to SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "scm.project.read",
            "name" : "Read Project from SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "scm.test.connection",
            "name" : "Test Connection of SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "selenium.docker-compose.generate",
            "name" : "Generate Selenium DockerCompose",
            "group" : "pipeline"
        }, 
        {
            "_id" : "selenium.docker.images",
            "name" : "Read Selenium Docker Image",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.create",
            "name" : "Create SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.read",
            "name" : "Read SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.update",
            "name" : "Update SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "test.plan.create",
            "name" : "Create Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.plan.delete",
            "name" : "Delete Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.plan.read",
            "name" : "Read Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.plan.update",
            "name" : "Update Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.create",
            "name" : "Create Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.delete",
            "name" : "Delete Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.execute",
            "name" : "Execute Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.force-complete",
            "name" : "Force Complete Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.read",
            "name" : "Read Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.update",
            "name" : "Update Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "tool.create",
            "name" : "Create Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "tool.delete",
            "name" : "Delete Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "tool.read",
            "name" : "Read Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "tool.update",
            "name" : "Update Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.create",
            "name" : "Create UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.delete",
            "name" : "Delete UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.read",
            "name" : "Read UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.update",
            "name" : "Update UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "whitelist.tool.create",
            "name" : "Create Whitelist Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "whitelist.tool.delete",
            "name" : "Delete Whitelist Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "whitelist.tool.read",
            "name" : "Read Whitelist Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "whitelist.tool.update",
            "name" : "Update Whitelist Tool",
            "group" : "execution"
        }
    ],
    "lastModifiedDate" : ISODate("2021-01-27T13:44:16.597Z"),
    "_class" : "com.cognizant.authapi.users.beans.Role"
},
{
    "_id" : "qa lead",
    "desc" : "",
    "permissions" : [ 
        {
            "_id" : "appstatus.read",
            "name" : "Read AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.read",
            "name" : "Read AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "chart.read",
            "name" : "Read Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.env.read",
            "name" : "Read Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.read",
            "name" : "Read Job from Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "scm.project.read",
            "name" : "Read Project from SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "selenium.docker.images",
            "name" : "Read Selenium Docker Image",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.read",
            "name" : "Read SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "tool.read",
            "name" : "Read Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.read",
            "name" : "Read UserSetting",
            "group" : "pipeline"
        }
    ],
    "lastModifiedDate" : ISODate("2021-01-28T05:21:09.735Z"),
    "_class" : "com.cognizant.authapi.users.beans.Role"
},
{
    "_id" : "qa engineer",
    "desc" : "",
    "permissions" : [ 
        {
            "_id" : "alm.test.read",
            "name" : "Read ALM Test",
            "group" : "execution"
        }, 
        {
            "_id" : "appstatus.read",
            "name" : "Read AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.read",
            "name" : "Read AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "aws.robot.create",
            "name" : "Create AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.robot.read",
            "name" : "Read AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.robot.update",
            "name" : "Update AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.service.update",
            "name" : "Update AWS Robot Service",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.create",
            "name" : "Create Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.read",
            "name" : "Read Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.update",
            "name" : "Update Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.service.update",
            "name" : "Update Azure Robot Service",
            "group" : "execution"
        }, 
        {
            "_id" : "chart.read",
            "name" : "Read Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "execution.create",
            "name" : "Create Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.create",
            "name" : "Create Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.read",
            "name" : "Read Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.update",
            "name" : "Update Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.create",
            "name" : "Create Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.read",
            "name" : "Read Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.update",
            "name" : "Update Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.create",
            "name" : "Create Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.read",
            "name" : "Read Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.update",
            "name" : "Update Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.read",
            "name" : "Read Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.create",
            "name" : "Create Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.download",
            "name" : "Download Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.force-complete",
            "name" : "Force Complete Test in Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.read",
            "name" : "Read Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.token",
            "name" : "Get Token for Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.update",
            "name" : "Update Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.create",
            "name" : "Create Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.read",
            "name" : "Read Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.update",
            "name" : "Update Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.update",
            "name" : "Update Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "jenkins.env.read",
            "name" : "Read Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.read",
            "name" : "Read Job from Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "project.read",
            "name" : "Read Project",
            "group" : "execution"
        }, 
        {
            "_id" : "report.create",
            "name" : "Create Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.delete",
            "name" : "Delete Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.failure-analysis.update",
            "name" : "Update Failure Analysis in Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.force-complete",
            "name" : "Force Complete Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.merge",
            "name" : "Merge Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.read",
            "name" : "Read Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.update",
            "name" : "Update Report",
            "group" : "report"
        }, 
        {
            "_id" : "robot.message.receive",
            "name" : "Receive Message to Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "robot.message.send",
            "name" : "Send Message to Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "scm.project.read",
            "name" : "Read Project from SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "selenium.docker.images",
            "name" : "Read Selenium Docker Image",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.read",
            "name" : "Read SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "test.plan.create",
            "name" : "Create Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.plan.read",
            "name" : "Read Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.plan.update",
            "name" : "Update Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.create",
            "name" : "Create Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.execute",
            "name" : "Execute Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.force-complete",
            "name" : "Force Complete Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.read",
            "name" : "Read Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.update",
            "name" : "Update Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "tool.read",
            "name" : "Read Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.read",
            "name" : "Read UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "whitelist.tool.create",
            "name" : "Create Whitelist Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "whitelist.tool.read",
            "name" : "Read Whitelist Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "whitelist.tool.update",
            "name" : "Update Whitelist Tool",
            "group" : "execution"
        }
    ],
    "lastModifiedDate" : ISODate("2021-01-27T13:29:44.008Z"),
    "_class" : "com.cognizant.authapi.users.beans.Role"
},
{
    "_id" : "viewer",
    "desc" : "",
    "permissions" : [ 
        {
            "_id" : "alm.test.read",
            "name" : "Read ALM Test",
            "group" : "execution"
        }, 
        {
            "_id" : "appstatus.read",
            "name" : "Read AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.read",
            "name" : "Read AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "aws.robot.read",
            "name" : "Read AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.read",
            "name" : "Read Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "chart.read",
            "name" : "Read Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "execution.job.read",
            "name" : "Read Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.read",
            "name" : "Read Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.read",
            "name" : "Read Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.read",
            "name" : "Read Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.read",
            "name" : "Read Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.read",
            "name" : "Read Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "jenkins.env.read",
            "name" : "Read Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.read",
            "name" : "Read Job from Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "leap.password.update",
            "name" : "Update Password",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.team.create",
            "name" : "Create Team",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.user.read",
            "name" : "Read User",
            "group" : "adminstration"
        }, 
        {
            "_id" : "project.read",
            "name" : "Read Project",
            "group" : "execution"
        }, 
        {
            "_id" : "report.read",
            "name" : "Read Report",
            "group" : "report"
        }, 
        {
            "_id" : "scm.project.read",
            "name" : "Read Project from SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "scm.test.connection",
            "name" : "Test Connection of SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "selenium.docker.images",
            "name" : "Read Selenium Docker Image",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.read",
            "name" : "Read SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "test.plan.read",
            "name" : "Read Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.read",
            "name" : "Read Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "tool.read",
            "name" : "Read Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.read",
            "name" : "Read UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "whitelist.tool.read",
            "name" : "Read Whitelist Tool",
            "group" : "execution"
        }
    ],
    "lastModifiedDate" : ISODate("2021-01-28T06:03:49.691Z"),
    "_class" : "com.cognizant.authapi.users.beans.Role"
},
{
    "_id" : "leap_demo",
    "desc" : "",
    "permissions" : [ 
        {
            "_id" : "alm.test.read",
            "name" : "Read ALM Test",
            "group" : "execution"
        }, 
        {
            "_id" : "appstatus.delete",
            "name" : "Delete AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "appstatus.read",
            "name" : "Read AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "appstatus.update",
            "name" : "Update AppStatus",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.create",
            "name" : "Create AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.delete",
            "name" : "Delete AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.read",
            "name" : "Read AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "auto-suggest.update",
            "name" : "Update AutoSuggest",
            "group" : "pipeline"
        }, 
        {
            "_id" : "aws.robot.create",
            "name" : "Create AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.robot.delete",
            "name" : "Delete AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.robot.read",
            "name" : "Read AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.robot.update",
            "name" : "Update AWS Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "aws.service.update",
            "name" : "Update AWS Robot Service",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.create",
            "name" : "Create Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.delete",
            "name" : "Delete Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.read",
            "name" : "Read Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.robot.update",
            "name" : "Update Azure Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "azure.service.update",
            "name" : "Update Azure Robot Service",
            "group" : "execution"
        }, 
        {
            "_id" : "chart.create",
            "name" : "Create Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "chart.delete",
            "name" : "Delete Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "chart.read",
            "name" : "Read Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "chart.update",
            "name" : "Update Chart",
            "group" : "pipeline"
        }, 
        {
            "_id" : "execution.create",
            "name" : "Create Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.delete",
            "name" : "Delete Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.create",
            "name" : "Create Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.delete",
            "name" : "Delete Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.read",
            "name" : "Read Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.job.update",
            "name" : "Update Execution Job",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.create",
            "name" : "Create Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.delete",
            "name" : "Delete Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.read",
            "name" : "Read Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.log.update",
            "name" : "Update Execution Log",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.create",
            "name" : "Create Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.delete",
            "name" : "Delete Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.read",
            "name" : "Read Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.properties.update",
            "name" : "Update Execution Properties",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.read",
            "name" : "Read Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.create",
            "name" : "Create Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.delete",
            "name" : "Delete Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.download",
            "name" : "Download Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.force-complete",
            "name" : "Force Complete Test in Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.read",
            "name" : "Read Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.token",
            "name" : "Get Token for Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.robot.update",
            "name" : "Update Execution Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.create",
            "name" : "Create Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.delete",
            "name" : "Delete Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.read",
            "name" : "Read Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.tool.update",
            "name" : "Update Execution Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "execution.update",
            "name" : "Update Execution",
            "group" : "execution"
        }, 
        {
            "_id" : "failure-analysis.prediction",
            "name" : "Failure Analysis Prediction",
            "group" : "report"
        }, 
        {
            "_id" : "failure-analysis.retrain",
            "name" : "Failure Analysis Retrain",
            "group" : "report"
        }, 
        {
            "_id" : "failure-analysis.tags",
            "name" : "Get Failure Analysis Tags",
            "group" : "report"
        }, 
        {
            "_id" : "jenkins.env.delete",
            "name" : "Delete Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.env.read",
            "name" : "Read Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.env.update",
            "name" : "Update Jenkins Environment Variables",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.build",
            "name" : "Build Job in Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.create",
            "name" : "Create Job in Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.read",
            "name" : "Read Job from Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.job.update",
            "name" : "Update Job in Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "jenkins.test",
            "name" : "Test Jenkins",
            "group" : "pipeline"
        }, 
        {
            "_id" : "leap.user.read",
            "name" : "Read User",
            "group" : "adminstration"
        }, 
        {
            "_id" : "leap.user.token",
            "name" : "Generate User Token",
            "group" : "adminstration"
        }, 
        {
            "_id" : "pipeline.convert",
            "name" : "Convert Project to Pipeline",
            "group" : "pipeline"
        }, 
        {
            "_id" : "project.create",
            "name" : "Create Project",
            "group" : "execution"
        }, 
        {
            "_id" : "project.delete",
            "name" : "Delete Project",
            "group" : "execution"
        }, 
        {
            "_id" : "project.read",
            "name" : "Read Project",
            "group" : "execution"
        }, 
        {
            "_id" : "project.update",
            "name" : "Update Project",
            "group" : "execution"
        }, 
        {
            "_id" : "report.create",
            "name" : "Create Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.delete",
            "name" : "Delete Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.failure-analysis.update",
            "name" : "Update Failure Analysis in Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.force-complete",
            "name" : "Force Complete Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.merge",
            "name" : "Merge Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.read",
            "name" : "Read Report",
            "group" : "report"
        }, 
        {
            "_id" : "report.update",
            "name" : "Update Report",
            "group" : "report"
        }, 
        {
            "_id" : "robot.message.receive",
            "name" : "Receive Message to Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "robot.message.send",
            "name" : "Send Message to Robot",
            "group" : "execution"
        }, 
        {
            "_id" : "scm.file.push",
            "name" : "Push File to SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "scm.project.read",
            "name" : "Read Project from SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "scm.test.connection",
            "name" : "Test Connection of SCM (Git/GitHub/BitBucket)",
            "group" : "pipeline"
        }, 
        {
            "_id" : "selenium.docker-compose.generate",
            "name" : "Generate Selenium DockerCompose",
            "group" : "pipeline"
        }, 
        {
            "_id" : "selenium.docker.images",
            "name" : "Read Selenium Docker Image",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.create",
            "name" : "Create SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.read",
            "name" : "Read SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "system.settings.update",
            "name" : "Update SystemSettings",
            "group" : "pipeline"
        }, 
        {
            "_id" : "test.plan.create",
            "name" : "Create Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.plan.delete",
            "name" : "Delete Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.plan.read",
            "name" : "Read Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.plan.update",
            "name" : "Update Test Plan",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.create",
            "name" : "Create Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.delete",
            "name" : "Delete Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.execute",
            "name" : "Execute Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.force-complete",
            "name" : "Force Complete Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.read",
            "name" : "Read Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "test.suite.update",
            "name" : "Update Test Suite",
            "group" : "execution"
        }, 
        {
            "_id" : "tool.create",
            "name" : "Create Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "tool.delete",
            "name" : "Delete Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "tool.read",
            "name" : "Read Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "tool.update",
            "name" : "Update Tool",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.create",
            "name" : "Create UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.delete",
            "name" : "Delete UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.read",
            "name" : "Read UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "user.setting.update",
            "name" : "Update UserSetting",
            "group" : "pipeline"
        }, 
        {
            "_id" : "whitelist.tool.create",
            "name" : "Create Whitelist Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "whitelist.tool.delete",
            "name" : "Delete Whitelist Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "whitelist.tool.read",
            "name" : "Read Whitelist Tool",
            "group" : "execution"
        }, 
        {
            "_id" : "whitelist.tool.update",
            "name" : "Update Whitelist Tool",
            "group" : "execution"
        }
    ],
    "lastModifiedDate" : ISODate("2021-03-08T06:32:59.608Z"),
    "_class" : "com.cognizant.authapi.users.beans.Role"
},

{
    "_id": "project manager ciqd",
    "permissions": [
      {
        "_id": "ciqdashboard.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard"
      },
      {
        "_id": "ciqdashboard.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard"
      },
      {
        "_id": "ciqdashboard.delete",
		"group" : "ciqdashboard",
        "name": "Delete Dashboard"
      },
      {
        "_id": "ciqdashboard.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard"
      },
      {
        "_id": "ciqdashboard.project.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard Project"
      },
      {
        "_id": "ciqdashboard.project.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard Project"
      },
      {
        "_id": "ciqdashboard.project.delete",
		"group" : "ciqdashboard",
        "name": "Delete Dashboard Project"
      },
      {
        "_id": "ciqdashboard.project.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Project"
      },
      {
        "_id": "ciqdashboard.external.data.update",
		"group" : "ciqdashboard",
        "name": "Upload external data"
      },
      {
        "_id": "ciqdashboard.datasource.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard Datasource"
      },
      {
        "_id": "ciqdashboard.datasource.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard Datasource"
      },
      {
        "_id": "ciqdashboard.datasource.delete",
		"group" : "ciqdashboard",
        "name": "Delete Dashboard Datasource"
      },
      {
        "_id": "ciqdashboard.datasource.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Datasource"
      },
      {
        "_id": "ciqdashboard.chart.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.chart.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.chart.delete",
		"group" : "ciqdashboard",
        "name": "Delete Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.chart.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.page.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard Page"
      },
      {
        "_id": "ciqdashboard.page.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard Page"
      },
      {
        "_id": "ciqdashboard.page.delete",
		"group" : "ciqdashboard",
        "name": "Delete Dashboard Page"
      },
      {
        "_id": "ciqdashboard.page.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Page"
      }
    ],
    "lastModifiedDate" : ISODate("2021-03-08T06:32:59.608Z"),
    "_class" : "com.cognizant.authapi.users.beans.Role"
  },
  {
    "_id": "qa lead ciqd",
    "permissions": [
      {
        "_id": "ciqdashboard.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard"
      },
      {
        "_id": "ciqdashboard.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard"
      },
      {
        "_id": "ciqdashboard.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard"
      },
      {
        "_id": "ciqdashboard.project.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard Project"
      },
      {
        "_id": "ciqdashboard.project.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Project"
      },
      {
        "_id": "ciqdashboard.external.data.update",
		"group" : "ciqdashboard",
        "name": "Upload external data"
      },
      {
        "_id": "ciqdashboard.datasource.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard Datasource"
      },
      {
        "_id": "ciqdashboard.datasource.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard Datasource"
      },
      {
        "_id": "ciqdashboard.datasource.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Datasource"
      },
      {
        "_id": "ciqdashboard.chart.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.chart.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.chart.delete",
		"group" : "ciqdashboard",
        "name": "Delete Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.chart.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.page.create",
		"group" : "ciqdashboard",
        "name": "Create Dashboard Page"
      },
      {
        "_id": "ciqdashboard.page.update",
		"group" : "ciqdashboard",
        "name": "Update Dashboard Page"
      },
      {
        "_id": "ciqdashboard.page.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Page"
      }
    ],
    "lastModifiedDate" : ISODate("2021-03-08T06:32:59.608Z"),
    "_class" : "com.cognizant.authapi.users.beans.Role"
  },
  {
    "_id": "Viewer ciqd",
    "permissions": [
      {
        "_id": "ciqdashboard.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard"
      },
      {
        "_id": "ciqdashboard.project.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Project"
      },
      {
        "_id": "ciqdashboard.datasource.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Datasource"
      },
      {
        "_id": "ciqdashboard.chart.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Chart"
      },
      {
        "_id": "ciqdashboard.page.view",
		"group" : "ciqdashboard",
        "name": "View Dashboard Page"
      }
    ],
	"lastModifiedDate" : ISODate("2021-03-08T06:32:59.608Z"),
    "_class" : "com.cognizant.authapi.users.beans.Role"
  }
]);



