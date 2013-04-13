			function ruleManCheck(guy, ball)
			{
				// X
				if (guy.person.xForm.pos[0] > 9.5)
				{
					guy.person.xForm.pos[0] = 9.5;
				}
				else if (guy.person.xForm.pos[0] < -9.5)
				{
					guy.person.xForm.pos[0] = -9.5;
				}
				
				// Y
				if (guy.person.xForm.pos[1] > 8.5)
				{
					guy.person.xForm.pos[1] = 8.5;
				}
				else if (guy.person.xForm.pos[1] < -9)
				{
					guy.person.xForm.pos[1] = -9;
				}
				// Z
				if (guy.person.xForm.pos[2] > 40)
				{
					guy.person.xForm.pos[2] = 40;
				}
				else if (guy.person.xForm.pos[2] < -9)
				{
					guy.person.xForm.pos[2] = -9;
				}
				var distanceX = ball.xForm.pos[0] - guy.person.xForm.pos[0];
				var distanceY = ball.xForm.pos[1] - guy.person.xForm.pos[1];
				var distanceZ = ball.xForm.pos[2] - guy.person.xForm.pos[2];
				// ball too close
				if (((distanceX <= 1) && (distanceX >= -1)) &&
					((distanceY <= 1) && (distanceY >= -1)) &&
					((distanceZ <= 1) && (distanceZ >= -1)))
				{
					if (distanceX == 0)
					{
						ball.xForm.pos[0] += 2;
					}
					else if (ball.xForm.pos[0] > guy.person.xForm.pos[0])
					{
						ball.xForm.pos[0] += 1;
					}
					else
					{
						ball.xForm.pos[0] -= 1;
					}
					
					if (distanceY == 0)
					{
						ball.xForm.pos[1] += 2;
					}
					else if (ball.xForm.pos[1] > guy.person.xForm.pos[1])
					{
						ball.xForm.pos[1] += 1;
					}
					else
					{
						ball.xForm.pos[1] -= 1;
					}
					/*
					if (distanceZ == 0)
					{
						
						ball.xForm.pos[2] += 2;
					}
					else if (ball.xForm.pos[2] > guy.person.xForm.pos[2])
					{
						ball.xForm.pos[2] += 1;
					}
					else
					{
						ball.xForm.pos[2] -= 1;
					}*/
					
				}	
			}
			
			function ruleBallCheck(ball, score)
			{
				// X
				if (ball.xForm.pos[0] > 9.5)
				{
					ball.xForm.pos[0] = 7.5;
				}
				else if (ball.xForm.pos[0] < -9.5)
				{
					ball.xForm.pos[0] = -7.5;
				}
				
				// Y
				if (ball.xForm.pos[1] > 9.5)
				{
					ball.xForm.pos[1] = 7.5;
				}
				else if (ball.xForm.pos[1] < -9.5)
				{
					ball.xForm.pos[1] = -7.5;
				}
				
				// Z
				if (ball.xForm.pos[2] > 40)
				{
					ball.xForm.pos[2] = 40;
				}
				else if (ball.xForm.pos[2] < -9)
				{
					ball.xForm.pos[2] = -9;
				}
				
				if (((ball.xForm.pos[0] >= 8.2) ||
				   (ball.xForm.pos[0] <= -8.2)) &&
				   ((ball.xForm.pos[1] >= 8.2) ||
				   (ball.xForm.pos[1] <= -8.2)))
				{
					ball.xForm.pos = [0,0,0];
					return true;
				}
				return false;
			}
			
			function ruleComputerCheck(guy, clock, clockSpeed)
			{
					// X
					if (guy.person.xForm.pos[0] < ball.xForm.pos[0])
					{
						guy.person.xForm.pos[0] += .05 + clockSpeed;
					}
					else
					{
						guy.person.xForm.pos[0] -= .05 + clockSpeed;
					}
					// Y
					if (guy.person.xForm.pos[1] < ball.xForm.pos[1])
					{
						guy.person.xForm.pos[1] += .05 + clockSpeed;
					}
					else
					{
						guy.person.xForm.pos[1] -= .05 + clockSpeed;
					}	
			}
		
			function ruleCheck(ball, walls)
			{
				
				var dGoalX = ball.xForm.pos[0] - walls.wall[5].xForm.pos[0];
				var dGoalY = ball.xForm.pos[1] - walls.wall[5].xForm.pos[1];
				var dGoalZ = ball.xForm.pos[2] - walls.wall[5].xForm.pos[2];
				
				if (((dGoalX <= 1.5) && (dGoalX >= -1.5)) &&
					((dGoalY <= 1.5) && (dGoalY >= -1.5)) &&
					((dGoalZ <= 1.5) && (dGoalZ >= -1.5)))
				{
					ball.xForm.pos = [0,0,0];
					return true;
				}
				return false;
			}