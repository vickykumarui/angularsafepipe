import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-safe-pipe';
  myValue = [
    {
      "question": "<strong>How do I redeem my rewards for travel?</strong>",
      "answer": "<p>You have two ways to redeem your miles for travel:</p><p><strong>1) Redeem for past travel purchases using Purchase Eraser<sup>®</sup></strong><br />Simply book your travel through your favorite travel website, travel agent, or other travel resource using your Capital One Rewards card. Then, go online at capitalone.com or call our Rewards Center to use our Purchase Eraser feature to redeem your miles and receive an account credit for the cost of your travel purchase.<br /><br />Purchase Eraser redemptions must be made within 90 days from the date your travel purchase posts to your account. Your account credit is usually applied to your balance within 2 to 3 business days after the redemption. You must have the total amount of miles required in order to redeem for your selected travel purchase—partial redemptions will not be processed.<br /><br /><strong>2) Book new travel reservations</strong><br />Go online to capitalone.com or contact our Rewards Center to book your flight, car rental or hotel and use your miles to pay for your travel.</p><p><p>The number of miles needed for travel redemption varies and is based upon the cost of the travel purchase. Here is how it works:</p><table class=\"capitalOne_rewards_tbl_std\" border=\"3\" bordercolor=\"#000000\" cellpadding=\"3\" width=\"100%\"><thead><tr><th id=\"tbl34id0_0\" width=\"35%\" scope=\"col\" align=\"left\"><strong>Cost of travel purchase</strong></th><th id=\"tbl34id0_1\" width=\"65%\" scope=\"col\" align=\"left\"><strong>Number of Rewards needed</strong></th></tr></thead><tbody><tr><td width=\"35%\" headers=\"tbl34id0_0\">Up to $150</td><td width=\"65%\" headers=\"tbl34id0_1\">15,000 miles</td></tr><tr><td width=\"35%\" headers=\"tbl34id0_0\">$150.01 to $350</td><td width=\"65%\" headers=\"tbl34id0_1\">35,000 miles</td></tr><tr><td width=\"35%\" headers=\"tbl34id0_0\">$350.01 to $600</td><td width=\"65%\" headers=\"tbl34id0_1\">60,000 miles</td></tr><tr><td width=\"35%\" headers=\"tbl34id0_0\">$600.01 and greater</td><td width=\"65%\" headers=\"tbl34id0_1\">the cost of travel x 100</td></tr></tbody></table></p><p>If your travel transaction includes taxes, surcharges, and fees, these expenses will be included in the overall calculation to determine how many miles are required for redemption. Separately itemized travel transactions on your statement cannot be combined for a single redemption. Please note that Capital One has no control over how merchants itemize and charge related transactions.</p><p></p>",
      "sequenceNumber": 1
    }];

}
