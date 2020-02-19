import React, { Component } from 'react'
import { View, TouchableHighlight } from 'react-native'
import { Text, Card, Divider } from 'react-native-elements'

const defaultJSONData = {
  source: {
    id: null,
    name: 'Dailytelegraph.com.au'
  },
  author: 'https://www.dailytelegraph.com.au/sport/nrl/nrl-nines-2020-live-coverage-from-hbf-stadium-in-perth/live-coverage/c95a25e9f724500a0e4ec9b0d49ac669',
  title:
    'NRL Nines Perth 2020: Live score updates & results, stream, how to watch - Daily Telegraph',
  description:
    'The Quarter finals of the NRL Nines are underway in Perth, with the Knights, Eels, Dragons, Panthers, Rabbitohs, Titans, Cowboys and Sea Eagles all progressing at the end of the first two rounds.',
  url:
    'https://www.dailytelegraph.com.au/sport/nrl/nrl-nines-2020-live-coverage-from-hbf-stadium-in-perth/live-coverage/c95a25e9f724500a0e4ec9b0d49ac669',
  urlToImage:
    'https://content.api.news/v3/images/bin/5a38783fd98552bcf6c941dada0c92a9',
  publishedAt: '2020-02-15T06:34:00Z',
  content:
    'The Quarter finals of the NRL Nines are underway in Perth, with the Knights, Eels, Dragons, Panthers, Rabbitohs, Titans, Cowboys and Sea Eagles all progressing at the end of the first two rounds.\r\nThe first day of the 2020 NRL Nines saw upsets galore, veteran… [+2091 chars]'
}



	
class Article extends Component {

	render() {
		const {
			title,
			description,
			publishedAt,
			source,
			urlToImage,
			url
		} = this.props.article;

	
		return (
			
				<Card
					featuredTitle={title}
					featuredTitleStyle={{
						marginHorizontal: 5,
						textShadowColor: '#00000f',
						textShadowOffset: { width: 3, height: 3 },
						textShadowRadius: 3
					}}
					image={{
						uri: urlToImage
					}}
				>
					<Text style={{ marginBottom: 10 }}>
						{description || 'Read more...'}
					</Text>
					<Divider style={{ backgroundColor: '#dfe6e9' }} />
					<View
						
						style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
						
					>
						<Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>by : 
							{source.name.toUpperCase()}
						</Text>
						<Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>
							on {publishedAt}
						</Text>
					</View>
				</Card>
		
		);
	}
}

export default Article;