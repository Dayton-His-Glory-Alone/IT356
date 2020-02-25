#version 430 core

out vec4 FragColor;
uniform float timeVal;

void main()
{
      FragColor = vec4(1.0, 1.4, 0.0, 1.0);// FragColor = vec4(abs(sin(timeVal)), 1.0, 1.0, 0.5);
}
