# Video tutorials

 1. Setting up seed project: https://youtu.be/Zkesm9CUP_o
 2. Consume data from aspnet5 mvc6 controller: https://youtu.be/Rq63N61C3G4
 3. Get Started with EntityFramework 7: https://youtu.be/EYsQrEu9Z6c

 - Upgrade angular2 alpha 47 to 52: https://youtu.be/cbozcSC0L4A
 - Upgrade angular2 alpha 52 to beta0: https://youtu.be/UZAqWmWUuyI

## Future
 - Use Aspnet Identity
 - Implement cookie based authentication
 - Implement validation with aspnet5 taghelpers

# Build

 1. Make sure you have ASP.NET 5 RC1 installed.
 2. Open and build the project.

# Troubleshoot

**NPM Restore issues**

Sometimes VS failes to restore the npm deps, restore them from the cmd in that case.

 1. Open a cmd prompt
 2. Navigate to src\aspnet5ng2seed\
 3. run "npm install"
 4. run "dnx ef database update"
 5. Make sure the "node_modules" folder contains all the libs.

**'dnx' is not recognized as the name of a cmdlet...**

Path issues with DNX most likely.

>Install the latest version by opening a console and running:

>dnvm upgrade

>If you reopen VS you should be able to compile.

>If this doesn't work, try deleting the C:\Users\username\.dnx folder. Reopen VS and it will recreate the .dnx folder in the same >location with only 2 scripts: bin\dnvm.cmd and bin\dnvm.ps1 Note: This would delete all already installed runtimes.

>Rerun dnvm upgrade and check under the project properties if the Solution DNX SDK Version you have matches an installed one.

[Source](http://stackoverflow.com/a/31992313/2136136)

**"A network-related or instance-specific error occurred while establishing a connection to SQL Server."**

Depending on the database engine and other possibly non-default customizations, your connection string may vary from this project.
If you don't know about any SQL Server, you may not even have one installed on your computer or elsewhere.


Easiest thing to do is to install it from here:

Link: https://www.microsoft.com/en-gb/download/details.aspx?id=42299

Filename: ExpressAndTools 64BIT\SQLEXPRWT_x64_ENU.exe

If you've installed SQL Server 2014 Express With Management Tools as the link above refers to, you should be able to use the connection string below.

>Server=(LocalDB)\MSSQLLocalDB;Database=aspnet5ng2seed;Trusted_Connection=true;MultipleActiveResultSets=true;

# Upgrade dnvm and use 1.0.0-rc1-final

 1. dnvm update-self
 2. dnvm upgrade
 3. dnvm use 1.0.0-rc1-final -r clr -arch x86 -p
