#version 430 core

out vec4 FragColor;
uniform float timeVal;
void main()
{
   if(timeVal==0) FragColor = vec4(.0, 1.0, .0, 1.8);
         else if(timeVal==1) FragColor = vec4(.0, 0, 1, 1.0);
      else if(timeVal==2) FragColor = vec4(0, 1, 1, 1.0);
          else if(timeVal==3) FragColor = vec4(1, 0, 0, 1.0);
}
