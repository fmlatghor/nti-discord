const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
client.login(token);

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === '$ping') {
		msg.reply('pong');
	}
});

client.on('message', msg => {
	if (msg.content === '$rules') {
		const embed = new MessageEmbed()
			.setColor('0x0099ff')
			.setTitle('Rules')
			.setDescription('In order for this server to function properly, you will need to follow the guidelines of Discord and this server.')
			.addFields(
				{ name: '1)', value: 'Be polite to others.' },
				{ name: '2)', value: 'No NSFW content.' },
				{ name: '3)', value: 'No spamming or trolling.'},
				{ name: '4)', value: 'Keep things on-topic. Exceptions apply to [#off-topic](https://discord.com/channels/469574896754884630/469585287975272460).'},
				{ name: '5)', value: 'Be respectful in regards with religion and politics in concerns with the real world.'},
				{ name: '6)', value: 'Keep conversations in English, Spanish, or French so the moderators can easily do their job.'},
				{ name: '7)', value: 'Interactions with bots should stay in [#bot-spam](https://discord.com/channels/469574896754884630/518110435531030538).'},
				{ name: '8)', value: 'Before requesting for help, attempt the problem yourself. This does not mean the server discourages asking questions; the server *does* discourage lazy questions.'},
			)
			.setFooter('Unofficial Texas Instruments is in no way affiliated with Texas Instruments™', 'https://cdn.discordapp.com/icons/469574896754884630/acc126328db7eaca2d73b103188b86da.png?size=128');
		msg.channel.send(embed);
	}
});

client.on('message', msg => {
	if (msg.content === '$resources') {
		const embed = new MessageEmbed()
			.setColor('0x0099ff')
			.setTitle('Resources')
			.setDescription('Here are a  list of calc/retro hardware communities and useful links.')
			.addFields(
				{ name: 'Cemetech (https://cemetech.net/)', value: 'Solutions, discussion, resources, program archive'},
				{ name: 'CodeWalrus (https://codewalr.us/?sslRedirect)', value: 'Discussion'},
				{ name: 'Omnimaga (https://www.omnimaga.org/)', value: 'Discussion'},
				{ name: 'TI Calc (http://tistory.wikidot.com/)', value: 'Resources/guides, program archive'},
				{ name: 'TI-Basic Developer (http://tibasicdev.wikidot.com/)', value: 'Resources/guides, discussion'},
				{ name: 'TI-Freakware (http://www.tifreakware.net/)', value: 'Discussion, resources, program archive'},
				{ name: 'TI-Planet (French) (https://tiplanet.org/)', value: 'Solutions, discussion, resources, program archive'},
				{ name: 'TI-Story (http://tistory.wikidot.com/)', value: 'Community history'},
				{ name: 'WikiTI (http://wikiti.brandonw.net/?title=WikiTI_Home)', value: 'Discussion, resources'},
			)
			.setFooter('Unofficial Texas Instruments is in no way affiliated with Texas Instruments™', 'https://cdn.discordapp.com/icons/469574896754884630/acc126328db7eaca2d73b103188b86da.png?size=128');
		msg.channel.send(embed);
	}
});

client.on('message', msg => {
	if (msg.content === '$discord') {
		const embed = new MessageEmbed()
			.setColor('0x0099ff')
			.setTitle('Calculator/Retro Technology Discord Servers')
			.setDescription('Here are some links to Discord servers you should consider joining.')
			.addFields(
				{ name: 'Cemetech', value: 'https://discord.gg/DZbmraw'},
				{ name: 'Omnimaga', value: 'https://discord.gg/HkYq8nY'},
				{ name: 'CodeWalrus', value: 'http://discord.gg/cuZcfcF'},
			)
			.setFooter('Unofficial Texas Instruments is in no way affiliated with Texas Instruments™', 'https://cdn.discordapp.com/icons/469574896754884630/acc126328db7eaca2d73b103188b86da.png?size=128');
		msg.channel.send(embed);
	}
});

client.on('message', msg => {
	if (msg.content === '$faq') {
		const embed = new MessageEmbed()
			.setColor('0x0099ff')
			.setTitle('Frequently Asked Questions (FAQ)')
			.setDescription('These are some questions that are asked often by newcomers.')
			.addFields(
				{ name: 'What TI calculators are allowed on standarized tests?', value: 'https://education.ti.com/en/product-resources/graphing-course-comparison'},
				{ name: 'How do a link my calculator to my computer?', value: "To link your calculator to your computer, you need a link cable or a mini usb type A male to usb type A male depending on how new your calc is. For the latter, you might have one lying around the house for some other electronic. If not you can buy one [here](http://amzn.com/B00NH13S44). If you have an older calc, you'll need a link cable. You can buy one [here](http://amzn.com/B00006BXBS). Once you get a cable, you will need to install the necessary software. If you are on macOS or MS Windows, you'll need to install [TI Connect CE™](https://education.ti.com/en/products/computer-software/ti-connect-ce-sw). Despite it's name, [TI Connect CE™](https://education.ti.com/en/products/computer-software/ti-connect-ce-sw) works on non-color calcs. If you are on Linux, BSD, or any other OS, you will need to install [TILP](http://lpg.ticalc.org/prj_tilp/)."},
				{ name: 'Can I have a link for this server?', value: "https://discord.gg/rZRtRBu"},
			)
			.setFooter('Unofficial Texas Instruments is in no way affiliated with Texas Instruments™', 'https://cdn.discordapp.com/icons/469574896754884630/acc126328db7eaca2d73b103188b86da.png?size=128');
		msg.channel.send(embed);
	}
});

client.on('message', msg => {
	if (msg.content === '$help') {
		const embed = new MessageEmbed()
			.setColor('0x0099ff')
			.setTitle('Bot Commands')
			.setDescription('These are some commands you can use with NTI (Not Texas Instruments) bot.')
			.addFields(
				{ name: '$commands', value: 'Evoke a full list of commands that can be used with the NTI bot. This is the exact same as `$help`.'},
				{ name: '$discord', value: 'Evoke a list of TI calculator Discord servers'},
				{ name: '$faq', value: 'Evoke a list of frequently asked questions.'},
				{ name: '$help', value: 'Evoke a full list of commands that can be used with the NTI bot. This is the exact same as `$commands`.'},
				{ name: '$ping', value: 'See if the NTI bot is online'},
				{ name: '$resources', value: 'Evoke a list of resources for TI graphing calculators'},
				{ name: '$rules', value: 'Evoke a list of the rules for this server.'},
			)
			.setFooter('Unofficial Texas Instruments is in no way affiliated with Texas Instruments™', 'https://cdn.discordapp.com/icons/469574896754884630/acc126328db7eaca2d73b103188b86da.png?size=128');
		msg.channel.send(embed);
	}
});

client.on('message', msg => {
	if (msg.content === '$commands') {
		const embed = new MessageEmbed()
			.setColor('0x0099ff')
			.setTitle('Bot Commands')
			.setDescription('These are some commands you can use with NTI (Not Texas Instruments) bot.')
			.addFields(
				{ name: '$commands', value: 'Evoke a full list of commands that can be used with the NTI bot. This is the exact same as `$help`.'},
				{ name: '$discord', value: 'Evoke a list of TI calculator Discord servers'},
				{ name: '$faq', value: 'Evoke a list of frequently asked questions.'},
				{ name: '$help', value: 'Evoke a full list of commands that can be used with the NTI bot. This is the exact same as `$commands`.'},
				{ name: 'ping', value: 'See if the NTI bot is online'},
				{ name: '$resources', value: 'Evoke a list of resources for TI graphing calculators'},
				{ name: '$rules', value: 'Evoke a list of the rules for this server.'},
			)
			.setFooter('Unofficial Texas Instruments is in no way affiliated with Texas Instruments™', 'https://cdn.discordapp.com/icons/469574896754884630/acc126328db7eaca2d73b103188b86da.png?size=128');
		msg.channel.send(embed);
	}
});
