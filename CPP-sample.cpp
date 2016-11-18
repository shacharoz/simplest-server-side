ofstream bash_file;
bash_file.open ("./my_bash_script.sh");
std::string json_string ="{\"function\":\"add\",\"data\":{\"path\":\""+file_name_json+"\", \"timestamp\":\""+time_stamp+"\",\"name\":\""+objectName+"\",\"position\":{\"x\":"+startingX+",\"y\":"+startingY+",\"width\":"+width+",\"height\":"+height+"},\"picture\":\"no_picture\"}}";
std::string bash_call = "curl -H \"Content-Type: application/json\" -X POST -d '"+json_string+"' http://192.168.0.102:8080";
bash_file << bash_call;
bash_file.close();
system("./my_bash_script.sh");
