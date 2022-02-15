var sco = pipwerks.SCORM.init();

if(sco){
  var sco = pipwerks.SCORM.get("cmi.core.lesson_status");
  console.log(sco);
  console.log('Scorm Initialized as sco');
  if(sco != "completed"){
    sco = pipwerks.SCORM.set("cmi.core.lesson_status", "completed");
    if(sco){
       pipwerks.SCORM.quit();
    }
  }
}